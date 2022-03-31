from app.db import db

from datetime import datetime, timedelta
from uuid import uuid4

from mongoengine import ValidationError
from werkzeug.exceptions import BadRequest, InternalServerError
from werkzeug.security import generate_password_hash, check_password_hash

class Project(db.Document):
    project_id         = db.UUIDField(binary=False, primary_key=True)
    participants        = db.ListField(required=True)
    status              = db.StringField(required=True)
    name                = db.StringField(required=True)
    location            = db.PointField(required=True)
    description         = db.StringField(required=True)
    max_participants    = db.IntField(required=True)
    min_participants    = db.IntField(required=True)

    @staticmethod
    def get(project_id):
        try:
            return Project.objects.get(project_id=project_id)
        except Project.DoesNotExist as e:
            return None
        except Project.MultipleObjectsReturned as e:
            raise InternalServerError(f'{project_id} refers to multiple projects') from e

    @staticmethod
    def get_all():
            return [act_id for act_id in Project.objects.scalar('project_id')]

    def add_user(self, user_id):
        if len(self.participants) >= self.max_participants:
            raise BadRequest("project has reached maximum capacity")

        if user_id in self.participants:
            raise BadRequest("User has already joined project")

        self.modify(add_to_set__participants=user_id)


class LoginSession(db.Document):
    SESSION_DURATION     = timedelta(minutes=30)

    session_id           = db.UUIDField(binary=False, primary_key=True)
    user_id              = db.UUIDField(binary=False, required=True, default=100)
    expiration_time      = db.DateTimeField(required=True)

    def has_expired(self):
        return self.expiration_time < datetime.now()

    def invalidate(self):
        self.delete()

    @staticmethod
    def get(session_id):
        try:
            return LoginSession.objects.get(session_id=session_id)
        except LoginSession.DoesNotExist as e:
            return None
        except LoginSession.MultipleObjectsReturned as e:
            raise InternalServerError(f'{session_id} refers to multiple login sessions') from e


    @staticmethod
    def is_valid_session(session_id):
        if (session := LoginSession.objects(session_id=session_id).first()) is None:
            return False

        if session.has_expired():
            session.delete()
            return False

        return True

    @staticmethod
    def new_session(user_id):
        session_id = str(uuid4())
        expiration_time = datetime.now() + LoginSession.SESSION_DURATION

        try:
            LoginSession(
                user_id=user_id,
                session_id=session_id,
                expiration_time=expiration_time
            ).save()
        except ValidationError as e:
            raise BadRequest(e.message) from e

        return session_id

class User(db.Document):
    user_id     = db.UUIDField(binary=False, primary_key=True)
    email       = db.EmailField(required=True, unique=True)
    passhash    = db.StringField(required=True)
    first_name  = db.StringField(required=True)
    last_name   = db.StringField(required=True)
    biography   = db.StringField()
    picture     = db.StringField()
    reputation  = db.DecimalField(min_value=0, max_value=5, precision=3, default=3)  # TODO: save total reputation and number of ratings

    @staticmethod
    def get(user_id=None, email=None):
        if user_id:
            return User.get_by_id(user_id)
        elif email:
            return User.get_by_email(email)

    @staticmethod
    def get_all():
        return [user_id for user_id in User.objects.scalar('user_id')]

    @staticmethod
    def get_by_email(email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            return None
        except User.MultipleObjectsReturned as e:
            raise InternalServerError(f'{email} refers to multiple users') from e

    @staticmethod
    def get_by_id(user_id):
        try:
            return User.objects.get(user_id=user_id)
        except User.DoesNotExist:
            return None
        except User.MultipleObjectsReturned as e:
            raise InternalServerError(f'{user_id} refers to multiple users') from e


    @staticmethod
    def create(first_name, last_name, email, password, bio, picture):
        if User.get(email=email):
            raise BadRequest(f'{email} is already registered to a user')

        user_id = str(uuid4())
        password_hash = generate_password_hash(password)

        User(
            first_name=first_name,
            last_name=last_name,
            email=email,
            biography=bio,
            picture=picture,
            user_id=user_id,
            passhash=password_hash
        ).save()

        return user_id

    def check_password(self, password):
        return check_password_hash(self.passhash, password)

