#!/usr/bin/env python3

"""
Filename:       project.py
Description:    This file is used to handle projects
"""

from app.models import Project
from app.auth import validate_request

from flask import Blueprint, request
from datetime import datetime

project = Blueprint('Project', __name__, url_prefix='/project')

@project.route('/list')
def list_projects_route():
    validate_request(request)
    project_ids = project.get_all()

    return {
        'project_ids': project_ids,
        'quantity': len(project_ids)
    }

@project.route('/get')
def get_route():
    project_id = request.args['project_id']
    return project.get(project_id).to_json()


@project.route('/join/<uuid:project_id>', methods=["PUT"])
def join_project_route(project_id):
    _, sender_id = validate_request(request)

    project = project.get(project_id)
    project.add_user(sender_id)

    return {}
