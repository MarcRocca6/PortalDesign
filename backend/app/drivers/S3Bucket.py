#!/usr/bin/python3

"""
Filename:       S3Bucket.py
Description:    This file is a wrapper for the "boto3" driver
                to handle all interactions with the AWS-S3 Bucket storage system.
"""

import os
import string
import logging
from decouple import config
from boto3 import resource, client
from botocore.exceptions import ClientError

class S3Bucket():
    def __init__(self):
        self.resource = resource(
            's3',
            aws_access_key_id     = config("AWS_ACCESS_KEY_ID"),
            aws_secret_access_key = config("AWS_SECRET_ACCESS_KEY"),
            region_name           = config("REGION_NAME"),
            # aws_session_token     = config("AWS_SESSION_TOKEN"),
        )
        self.client = client(
            's3',
            aws_access_key_id     = config("AWS_ACCESS_KEY_ID"),
            aws_secret_access_key = config("AWS_SECRET_ACCESS_KEY"),
            region_name           = config("REGION_NAME"),
            # aws_session_token     = config("AWS_SESSION_TOKEN"),
        )

    def createBucket(self, bucketName:string, region=None):
        """Create an S3 bucket in a specified region

        If a region is not specified, the bucket is created in the S3 default
        region (us-east-1).

        :param bucket_name: Bucket to create
        :param region: String region to create bucket in, e.g., 'us-west-2'
        :return: True if bucket created, else False
        https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Bucket.create
        """
        try:
            if region is None: region = config("REGION_NAME"),
            location = {'LocationConstraint': region}
            self.resource.create_bucket(Bucket=bucketName,
                        CreateBucketConfiguration=location)
        except ClientError as e:
            logging.error(e)
            return False
        return True


    def listBuckets(self):
        """Returns all existing buckets in the AWS-S3-Buckets

        :return: Return list of all bucket names
        https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html?highlight=list_buckets#S3.Client.list_buckets
        """
        response = self.client.list_buckets()
        bucketNames = []
        for bucket in response['Buckets']:
            bucketNames.append(bucket["Name"])
        return bucketNames


    def listObjects(self, bucketName:string, key=False):
        """ Lists all objects in a bucket

        :param bucketName: Bucket to download.
        :param object_name: The name of the local input file which contains data to add.
        :param target_file: The path to the file in the S3 Bucket
        :param key: If key = True, returns only names of the files, otherwise returns file objects
        :return: Returns list of all the bucket objects in a bucket
        https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html?highlight=all#S3.Bucket.all
        """
        bucket = self.resource.Bucket(bucketName)
        objectList = []
        for object in bucket.objects.all(): 
            if key == True: objectList.append(object.key)
            else: objectList.append(object)
        return objectList


    def deleteObject(self, bucketName:string, queryKey):
        """Delete an element from a new bucket 
        
        :param bucketName: string, name of new bucket
        https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Bucket.delete
        """
        try:
            self.client.delete_object(Bucket=bucketName, Key=queryKey)
        except ClientError as e:
            logging.error(e)
            return False
        return True


    def uploadFile(self, bucketName:string, file_name, object_name):
        """Upload a file to a S3 bucket

        :param bucketName: Bucket to upload to.
        :param file_name: The path to the file to upload.
        :param object_name: S3 object name. Name of the file once it's uploaded.
        :return: True if file was uploaded, else False.
        https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Bucket.upload_file
        """
        try:
            self.client.upload_file(file_name, bucketName, object_name)
        except ClientError as e:
            logging.error(e)
            return False
        return True


    def downloadFile(self, bucketName:string, object_name, target_file):
        """Download a file from a S3 bucket

        :param bucketName: Bucket to download.
        :param object_name: The name of the key to download from.
        :param target_file: The path to the file to download to.
        :return: True if file was uploaded, else False.
        https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Bucket.download_file
        """
        try:
            self.client.download_file(bucketName, object_name, target_file)
        except ClientError as e: 
            logging.error(e)
            return False
        return True

