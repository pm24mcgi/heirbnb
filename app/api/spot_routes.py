from flask import Blueprint, jsonify, session, request, redirect
from app.models import Spot, db
from app.forms import SpotForm
from flask_login import login_required, current_user

from ..models.spot import Spot

spot_routes = Blueprint('spots', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# Route provides all avaialble spots
@spot_routes.route('/')
@login_required
def all_spots():
  spots = Spot.query.all()
#   print(spots)
#   print(current_user.to_dict()['id'])
  return {spot.id: spot.to_dict() for spot in spots}


@spot_routes.route('/<int:id>')
@login_required
def single_spot(id):
    spot = Spot.query.get(id)
    if spot:
        print(spot)
        return spot.to_dict()
    else:
        return 'Spot not found'


@spot_routes.route('/new', methods=['POST'])
@login_required
def new_spot():
    form = SpotForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']
    print(data)
    print(form.errors)

    if form.validate_on_submit():
        new_spot = Spot(
            user_id = current_user.to_dict()['id'],
            address = data['address'],
            title = data['title'],
            description = data['description'],
            city = data['city'], 
            state = data['state'],
            zip_code = data['zip_code'],
            lng = data['lng'],
            lat = data['lat'],
            bedrooms = data['bedrooms'],
            bathrooms = data['bathrooms'],
            sqFt = data['sqFt'],
            design_type = data['design_type'],
            price_per_day = data['price_per_day']
        )

        db.session.add(new_spot)
        db.session.commit()
        print(new_spot.to_dict())
        return new_spot.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
# {
#     "address": "95 Valle de Ason",
#     "title": "A Home",
#     "description": "My home",
#     "city": "Sandy Springs",
#     "state": "GA",
#     "zip_code": 30328,
#     "lng": "1.0",
#     "lat": "1.0",
#     "bedrooms": 4,
#     "bathrooms": 2,
#     "sqFt": 200,
#     "design_type": "Castles",
#     "price_per_day": 50
# }