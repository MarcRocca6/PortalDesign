from app.models import User, LoginSession

from datetime import datetime, timezone

from decouple import config
from flask import Blueprint, request
import jwt
from werkzeug.exceptions import BadRequest, InternalServerError, Forbidden
from mongoengine import ValidationError

auth = Blueprint('auth', __name__, url_prefix='/auth')

JWT_SECRET_KEY = config('JWT_SECRET_KEY')

def create_token(session_id):
    return jwt.encode({'session_id': session_id}, JWT_SECRET_KEY, algorithm='HS256')

def decode_token(token):
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=['HS256'])
    except jwt.exceptions.InvalidSignatureError as inv_signature:
        raise Forbidden('Token has invalid signature') from inv_signature
    except jwt.exceptions.DecodeError as inv_token:
        raise Forbidden('Token cannnot be decoded') from inv_token

    return payload

def validate_request(http_request):
    try:
        token = http_request.headers['Authorization'].split(' ')[1]
    except KeyError:
        raise Forbidden('No authorization provided')
    payload = decode_token(token)

    session_id = payload['session_id']
    if not LoginSession.is_valid_session(session_id):
        raise Forbidden('Invalid access token')

    user_id = LoginSession.get(session_id).user_id
    if User.get(user_id=user_id) is None:
        raise Forbidden('User no longer exists')

    return session_id, user_id


@auth.route('/register', methods=['POST'])
def register_route():
    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    password = data.get('password')
    bio = data.get('bio', '')
    picture = data.get('picture')

    user_id = User.create(first_name, last_name, email, password, bio, picture)
    session_id = LoginSession.new_session(user_id)

    return {
        'user_id': user_id,
        'token': create_token(session_id)
    }

@auth.route('/login', methods=["POST"])
def login_route():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if (user := User.get(email=email)) is None:
        raise BadRequest(f"{email} is not registered")

    if not user.check_password(password):
        raise Forbidden("Incorrect password")

    session_id = LoginSession.new_session(user.user_id)

    return {
        'user_id': user.user_id,
        'token': create_token(session_id)
    }

@auth.route('/logout', methods=['POST'])
def logout_route():
    session_id, _ = validate_request(request)

    # Session guaranteed to exist otherwise validate_request would raise an exception
    session = LoginSession.get(session_id)
    session.invalidate()

    return {'success': True}

@auth.route('/delete_expired', methods=['DELETE'])
def login_delete_route():
    return {
        'deleted' : LoginSession.objects(expiration_time__lt=datetime.now(tz=timezone.utc))
    }


