# PortalDesign
A prototype for a new design for the Accenture MyWizard Portal

## Establishing Authorisation for Databases

To first access the backend databases, the file `backend/.env` must be established. This file must be of the form:

```
AWS_ACCESS_KEY_ID = 'XXX'
AWS_SECRET_ACCESS_KEY = 'XXX'
REGION_NAME = 'us-east-1'

MONGO_USERNAME = 'XXX'
MONGO_PASSWORD = 'XXX'
MONGO_DB_NAME = 'XXX'

FLASK_SECRET_KEY = 'XXX'
JWT_SECRET_KEY = 'XXX'
```

The AWS keys can be found through the AWS email when you were invited to AWS. If you do not have access to your `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY`, ask your admin to invite you again. Alternatively you can setup [AWS-CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) which will automatically set up the AWS keys for you. The AWS keys will be needed to access AWS-S3-Buckets. The Mongo keys must be created within the Mongo database UI. Ask your admin to set that up for you.

The `FLASK_SECRET_KEY` and `JWT_SECRET_KEY` must be a randomly generated string. This can be generated from the following command, which should be run once for each secret key so that the keys are not the same:

The `MONGO_DB_NAME` variable sets the name of the database that is used on MongoDB Atlas for the deployed app. On the production server this is `portal-redesign-prod`. Developers should use a unique database name for their own testing, e.g. `portal-redesign-dev-xxx` (replacing `xxx` with the developer name or something else unique).

```
python -c "import secrets; print(secrets.token_hex())"
```

## Cloud Hosting Servie Access from Heroku

To push code to Heroku the [Heroku CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) must be installed. Once this has been installed and the git repository pulled, the directory must be linked to a specific Heroku project. The 'WeSport' app utilises two Heroku projects: 'portal-redesign-backend' and 'portal-redesign-frontend'. One exclusively hosts the frontend and one exclusively the backend. The following commands can be used to link a specific directory to a Heroku project. If you would like full access to the online Heroku console ask your admin. 

```
heroku git:remote -a portal-redesign-backend

OR 

heroku git:remote -a portal-redesign-frontend
```


## Uploading Code to Heroku & Git

The following code can be used to upload code directly to Heroku and deploy it.

```
git add .
git commit -m "Commit Message"

# Pushing the sub-directory 'backend' to Heroku
git subtree push --prefix backend heroku master

OR 

# Pushing the sub-directory 'frontend' to Heroku
git subtree push --prefix frontend heroku master

# Opens the deployed Heroku application
heroku open
```

## Creating Heroku Server App

The following code can be used to create new Heroku apps for this project.

```
# Creating backend heroku server app
heroku create -a portal-redesign-backend

OR 

# Creating frontend heroku server app
heroku create -a portal-redesign-frontend -b https://github.com/mars/create-react-app-buildpack.git
```