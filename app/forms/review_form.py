from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField
from wtforms.validators import DataRequired, Length,  NumberRange
from app.models import Review


class ReviewForm(FlaskForm):
  rating = DecimalField("Rating", validators=[DataRequired(),  NumberRange(min=1, max=5, message="Rating must be between 1 to 5.")])
  review = StringField("Review", validators=[DataRequired(), Length(min=1, max=1000, message="Review must be between to 1 to 1000.")])
