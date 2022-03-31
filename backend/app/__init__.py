import sys
import logging
from flask import Flask, request, make_response, session
from flask_cors import CORS

from app.db import db

from werkzeug.exceptions import BadRequest

app = Flask(__name__)
CORS(app)

app.config.from_object('config')
db.init_app(app)

# Error logging so any errors will be printed on 'heroku logs'
app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

from app.user import user as user_bp
from app.project import project as project_bp
from app.auth import auth as auth_bp

app.register_blueprint(user_bp)
app.register_blueprint(project_bp)
app.register_blueprint(auth_bp)

def return_bad_request(e):
    return 'Error: BadRequest', 400

# app.register_error_handler(KeyError, return_bad_request)
# app.register_error_handler(TypeError, return_bad_request)
# app.register_error_handler(db.ValidationError, return_bad_request)

@app.route('/hello')
def helloWorld():
    return "Hello World"
