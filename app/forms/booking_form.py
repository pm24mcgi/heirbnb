from tracemalloc import start
from flask_wtf import FlaskForm
from wtforms import DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import Booking
from datetime import date

def check_date_validator():
  start_date = start_date.data
  end_date = end_date.data
  today = date.today()
  if today > start_date:
    raise("The start date must be in the future.")
  if end_date < start_date:
    raise ValidationError("The end date must not be before the start date.")

class BookingForm(FlaskForm):
  start_date = DateField("Start Date", validators=[DataRequired(), check_date_validator])
  end_date = DateField("End Date", validators=[DataRequired(), check_date_validator])
