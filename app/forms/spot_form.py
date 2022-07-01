from random import choices
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, DecimalField
from wtforms.validators import DataRequired, ValidationError
from app.models import Spot

states = ('AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
)


def validate_number(form, field):
    # Checking if password matches
    if field.data <= 0:
        raise ValidationError('The number provided must be more than 0 in order to be listed.')

def spot_check(form, field):
  address = field.data
  zip_code = field.data
  spot = Spot.query.filter(Spot.address ==address, Spot.zip_code == zip_code).first()
  if spot:
    raise ValidationError('This listing already exsits.')



class SpotForm(FlaskForm):
  address = StringField("Address", validators = [DataRequired()])
  title = StringField("Title",  validators = [DataRequired()])
  description = StringField("Description",  validators = [DataRequired()])
  city = StringField("City", validators = [DataRequired()])
  state = SelectField("State", validators = [DataRequired()], choices=states)
  zip_code = StringField("Zip Code", validators = [DataRequired()])
  lng = DecimalField("Longitude", validators = [DataRequired()])
  lat = DecimalField("Latitude", validators = [DataRequired()])
  bedrooms = IntegerField("Bedrooms", validators = [DataRequired(), validate_number])
  bathrooms = IntegerField("Bathrooms", validators = [DataRequired(), validate_number])
  sqFt = IntegerField("Square Feet", validators=[DataRequired(), validate_number])
  design_type = SelectField("Design Type", validators=[DataRequired()],
                            choices=['Castles', 'LakeFront', 'Islands','Design',
                             'AmazingPools','CountrySide', 'Luxe', 'IconicCities', 'Mansions',
                             'Vineyards' ])
  price_per_day = IntegerField("Price Per Day", validators=[DataRequired(), validate_number])
