from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class ProfileForm(FlaskForm):
    first_name = StringField('First Name',  validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    bio = StringField('Bio', validators=[DataRequired()])
    photo = StringField('Profile Picture', validators=[DataRequired()])
