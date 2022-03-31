#!/usr/bin/env python3

"""
Filename:       DynamoDB.py
Description:    This file is a wrapper for the "boto3" driver
                to handle all interactions with the AWS DynamoDB database.
"""

import string
from decouple import config
from boto3 import resource, client


def DynamoDB():

    def __init__(self):
        self.resource = resource(
            'dynamodb',
            aws_access_key_id     = config("AWS_ACCESS_KEY_ID"),
            aws_secret_access_key = config("AWS_SECRET_ACCESS_KEY"),
            region_name           = config("REGION_NAME"),
            # aws_session_token     = config("AWS_SESSION_TOKEN"),
        )
        
        self.client = client(
            'dynamodb',
            aws_access_key_id     = config("AWS_ACCESS_KEY_ID"),
            aws_secret_access_key = config("AWS_SECRET_ACCESS_KEY"),
            region_name           = config("REGION_NAME"),
            # aws_session_token     = config("AWS_SESSION_TOKEN"),
        )


    '''
        Adds an item to a DynamoDB table 
        @param tableName : string, name of the table to add items too
        @param addDict : dictionary of keys and values. e.g. { 'key1' : value1, 'key2' : value2 }
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Table.put_item
    '''

    def addItem(self, tableName:string, addDict:dict):

        dynamoTable = self.resource.Table(tableName)
        dynoResponse = dynamoTable.put_item(
            Item = addDict
        )
        
        response = {
            'status' : dynoResponse['ResponseMetadata']['HTTPStatusCode'],
            'body': dynoResponse,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response


    '''
        Creates a new DynamoDB table
        @param tableName: string, name of the table to be created
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.create_table
    '''
    def createTable(self, tableName:string):
            
        if tableName not in list(self.client.list_tables()['TableNames']):     
            self.client.create_table(
                AttributeDefinitions = [ #array of attributes (name and type)
                    {
                        'AttributeName': 'id', # Name of the attribute
                        'AttributeType': 'N'   # N -> Number (S -> String, B-> Binary)
                    }
                ],
                TableName = tableName, # Name of the table 
                KeySchema = [       # 
                    {
                        'AttributeName': 'id',
                        'KeyType'      : 'HASH' # HASH -> partition key, RANGE -> sort key
                    }
                ],
                BillingMode = 'PAY_PER_REQUEST',
                Tags = [ # OPTIONAL 
                    {
                        'Key' : 'test-resource',
                        'Value': 'dynamodb-test'

                    }
                ]
            )


    '''
        Deletes an item from a DynamoDB table
        @param tableName: string
        @param id: int, id of the item to be deleted from Dynamo table
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.delete_item
    '''
    def deleteItem(self, tableName:string, id):
        
        dynamoTable = self.resource.Table(tableName)
        dynoResponse = dynamoTable.delete_item(
            Key = {
                'id': id
            }
        )
        response = {
            'status' : dynoResponse['ResponseMetadata']['HTTPStatusCode'],
            'body': dynoResponse,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response


    '''
        Deletes an item from a DynamoDB table
        @param tableName: string
        @param id: int, id of the item to be deleted from Dynamo table
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.delete_table
    '''
    def deleteTable(self, tableName:string):
        ### TO DO ###
        pass


    '''
        Get all the items in the DynamoDB
        @param tableName: string
        @param id: int, id of the item
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.scan
    '''
    def getAllItems(self, tableName:string):

        dynamoTable = self.resource.Table(tableName)
        dynoResponse = dynamoTable.scan()
            
        allItems = dynoResponse['Items']
        while 'LastEvaluatedKey' in dynoResponse:
            dynoResponse = dynamoTable.scan(ExclusiveStartKey=dynoResponse['LastEvaluatedKey'])
            allItems.extend(dynoResponse['Items'])
            
        response = {
            'status' : dynoResponse['ResponseMetadata']['HTTPStatusCode'],
            'body': allItems,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response


    '''
        Get the fields of an item in a DynamoDB table
        @param tableName: string
        @param id: int, id of the item
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.get_item
        NOTE: this function currently only gets the the attributes specified in AttributesToGet
    '''
    def getItem(self, tableName:string, id):

        dynamoTable = self.resource.Table(tableName)
        dynoResponse = dynamoTable.get_item(
            Key = {
                'id'     : id
            },
            AttributesToGet=[
                'title', 'author' # valid types dont throw error, 
                                # Other types should be converted to python type before sending as json response
            ]
        )
        response = {
            'status' : dynoResponse['ResponseMetadata']['HTTPStatusCode'],
            'body': dynoResponse['Item'],
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response


    '''
        Modifies a specific field in an item in a DynamoDB table
        @param tableName: string
        @param id: int, id of the item
        @itemKey key: string, of the field to modify
        @itemValue ___: value to insert into key field 
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.update_item
    '''
    def modifyItem(self, tableName:string, id:int, itemKey:string, itemValue):
        
        dynamoTable = self.resource.Table(tableName)
        dynoResponse = dynamoTable.update_item(
            Key = {
                'id': id
            },
            UpdateExpression = 'SET info.author = :new_author', #set author to new value
            #ConditionExpression = '', # execute until this condition fails # no condition
            ExpressionAttributeValues = { # Value for the variables used in the above expressions
                f":new_{itemKey}": itemValue
            },
            ReturnValues = "UPDATED_NEW"  #what to return
        )
        response = {
            'status' : dynoResponse['ResponseMetadata']['HTTPStatusCode'],
            'body': dynoResponse,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response


    '''
        Completely replace the data field of an item in a DynamoDB table
        @param tableName: string
        @param id: int, id of the item
        @param data : dict of keys and values. e.g. { 'key1' : value1, 'key2' : value2 }
        docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.update_item
    '''
    def updateItem(self, tableName:string, id:int, inputData:dict):
        
        dynamoTable = self.resource.Table(tableName)
        dynoResponse = dynamoTable.update_item(
            Key = {
                'id': id
            },
            AttributeUpdates={
                'title': {
                    'Value'  : inputData['title'],
                    'Action' : 'PUT' # available options -> DELETE(delete), PUT(set), ADD(increment)
                },
                'author': {
                    'Value'  : inputData['author'],
                    'Action' : 'PUT'
                }
            },
            ReturnValues = "UPDATED_NEW"  # returns the new updated values
        )
        response = {
            'status' : dynoResponse['ResponseMetadata']['HTTPStatusCode'],
            'body': dynoResponse,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }
        return response
