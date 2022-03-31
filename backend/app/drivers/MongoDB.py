#!/usr/bin/python3

"""
Filename:       MongoDB.py
Description:    This file is a wrapper for the "pymongo" driver
                to handle all interactions with the MongoDB database.
"""

import pymongo
from decouple import config
from botocore.exceptions import ClientError


class MongoDatabase:
    def __init__(self, db_name):
        USERNAME = config("MONGO_USERNAME")
        PASSWORD = config("MONGO_PASSWORD")
        DATABASE_URL = f'mongodb+srv://{USERNAME}:{PASSWORD}@we-sport-db.udsfs.mongodb.net/we-sport?'\
                        'retryWrites=true&w=majority'

        self.client = pymongo.MongoClient(DATABASE_URL)
        self.db = self.client[db_name]

    def __getattr__(self, attr):
        if hasattr(self.db, attr):
            return getattr(self.db, attr)

    # -----------------------------------------------------------------------
    # Use the pymongo interface rather than the wrapper functions
    # A database collection can be accessed as follows:
    #
    #       db = MongoDatabase('my_database')
    #       db.my_collection.insert_one(...)
    #
    # -----------------------------------------------------------------------


    def clearCollection(self, collectionName: str):
        """Clears all data in a specific collection in the "we-sport" database

        :param collectionName: string, name of collection
        https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html?highlight=drop#pymongo.collection.Collection.drop
        """
        try:
            self.db[collectionName].drop()
            return {'msg': 'Successfully cleared collection.'}
        except ClientError as e:
            return {'msg': 'Some error occured.'}


    def getCollection(self, collectionName: str):
        """Returns the collection object from the "we-sport" database

        :param collectionName: string, name of collection
        """
        return self.db[collectionName]


    def insert(self, collectionName: str, data):
        """Inserts data into a specific collection

        :param collectionName: string, name of collection
        :param data: data to be inserted into the database
        https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html?highlight=insert#pymongo.collection.Collection.insert_many
        https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html?highlight=insert_one#pymongo.collection.Collection.insert_one
        """
        if isinstance(data, list): # If data is a list
            try:
                self.db[collectionName].insert_many(data)
            except ClientError as e:
                return {'msg': 'Some error occured.'}
        else: # If data is a document object
            try:
                self.db[collectionName].insert_one(data)
            except ClientError as e:
                return {'msg': 'Some error occured.'}

        return {'msg': 'Successfully added data.'}


    def find(self, collectionName: str, query):
        """Find an element based on a specific query.

        :param collectionName: string, name of collection
        :param query: dictionary, i.e. {"author": "Mike"}, {"_id": 7}
        https://pymongo.readthedocs.io/en/stable/api/gridfs/index.html?highlight=update_one#gridfs.GridFS.find_one
        """
        return self.db[collectionName].find_one(query)


    def findAll(self, collectionName: str, query):
        """Find all elements based on a specific query.

        :param collectionName: string, name of collection
        :param query: dictionary, i.e. {"author": "Mike"}, {"_id": 7}
        https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html?highlight=find#pymongo.collection.Collection.find
        """
        results = []
        for x in self.db[collectionName].find():
            results.append(x)
        return results


    def sort(self, collectionName: str, sort: str, ascending=True):
        """Sort all elements by a certain field

        :param collectionName: string, name of collection
        :param sort: string, i.e. "name", "_id"
        https://pymongo.readthedocs.io/en/stable/api/pymongo/cursor.html?highlight=sort#pymongo.cursor.Cursor.sort
        """
        ascendVal = 1 if ascending else -1
        return self.db[collectionName].find().sort(sort, ascendVal)


    def delete(self, collectionName: str, query):
        """Delete element based on a specific query.

        :param collectionName: string, name of collection
        :param sort: string, i.e. "name", "_id"
        https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html?highlight=delete%20one#pymongo.collection.Collection.delete_one
        """
        try:
            self.db[collectionName].delete_one(query)
            return {'msg': 'Successfully deleted data.'}
        except ClientError as e:
            return {'msg': 'Some error occured.'}


    def edit(self, collectionName: str, query, newValues):
        """Edit element based on a specific query.

        :param collectionName: string, name of collection
        :param query: dictionary, i.e. {"author": "Mike"}, {"_id": 7}
        :param newValues: dictionary, i.e. { "$set": { "address": "Canyon 123" } }
        https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html?highlight=update_one#pymongo.collection.Collection.update_one
        """
        try:
            self.db[collectionName].update_one(query, newValues)
            return {'msg': 'Successfully edited data.'}
        except ClientError as e:
            return {'msg': 'Some error occured.'}

