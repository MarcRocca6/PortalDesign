#!/usr/bin/env python3

"""
Filename:       users.py
Description:    This file is used to handle users
"""

from app.models import User
from app.auth import validate_request

from flask import Blueprint, request

from werkzeug.exceptions import BadRequest, InternalServerError

user = Blueprint('user', __name__, url_prefix='/user')

@user.route('/list')
def list_users_route():
    session_id = validate_request(request)
    user_ids = User.get_all()

    return {
        'user_ids': user_ids,
        'quantity': len(user_ids)
    }

@user.route('/get')
def get_user_route():
    validate_request(request)
    user_id = request.args['user_id']
    user = User.get(user_id=user_id)

    if user is None:
        raise BadRequest(f'{user_id} is not a valid user id')

    PUBLIC_FIELDS = ('first_name', 'last_name', 'email', 'biography', 'reputation', 'picture')
    return {k: user[k] for k in PUBLIC_FIELDS}
