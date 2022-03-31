from decouple import config

MONGO_USERNAME = config('MONGO_USERNAME')
MONGO_PASSWORD = config('MONGO_PASSWORD')
MONGO_DB_NAME = config('MONGO_DB_NAME', 'we-sport-dev')

MONGODB_SETTINGS = {
    'host': f'mongodb+srv://{MONGO_USERNAME}:{MONGO_PASSWORD}@we-sport-db.udsfs.mongodb.net/'
            f'{MONGO_DB_NAME}?retryWrites=true&w=majority'
}

SECRET_KEY = config('FLASK_SECRET_KEY')
