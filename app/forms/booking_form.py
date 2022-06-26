from tracemalloc import start
from flask_wtf import FlaskForm
from wtforms import DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import Booking
from datetime import date


class BookingForm(FlaskForm):
  start_date = DateField("Start Date", validators=[DataRequired()])
  end_date = DateField("End Date", validators=[DataRequired()])
