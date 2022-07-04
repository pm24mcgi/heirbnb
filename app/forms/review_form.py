from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField, DecimalField
from wtforms.validators import DataRequired, Length,  NumberRange, ValidationError
from app.models import Review


def review_check(field):
    currentUserId = current_user.id
    review = Review.query.filter(Review.user_id == currentUserId).first()
    if review:
      raise ValidationError(
          'You have already submitted a review for this property.')

class ReviewForm(FlaskForm):
  rating = DecimalField("Rating", validators=[DataRequired(),  NumberRange(min=1, max=5, message="Rating must be between 1 to 5.")])
  review = StringField("Review", validators=[DataRequired(), Length(min=1, max=1000, message="Review must be between to 1 to 1000.")])
