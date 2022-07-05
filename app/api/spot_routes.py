from flask import Blueprint, jsonify, session, request, redirect
from app.models import Spot, db
from app.forms import SpotForm
from flask_login import login_required, current_user
from .utils import validation_errors_to_error_messages

from ..models.spot import Spot

spot_routes = Blueprint('spots', __name__)


# Route provides all avaialble spots
@spot_routes.route('')
def all_spots():
    spots = Spot.query.all()
    return {spot.id: spot.to_dict() for spot in spots}


@spot_routes.route('/<int:id>')
@login_required
def single_spot(id):
    spot = Spot.query.get(id)
    if spot:
        return spot.to_dict()
    else:
        return 'Spot not found'


@spot_routes.route('/new', methods=['POST'])
@login_required
def new_spot():
    form = SpotForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_spot = Spot(
            user_id=current_user.to_dict()['id'],
            address=data['address'],
            title=data['title'],
            description=data['description'],
            city=data['city'],
            state=data['state'],
            zip_code=data['zip_code'],
            lng=data['lng'],
            lat=data['lat'],
            bedrooms=data['bedrooms'],
            bathrooms=data['bathrooms'],
            sqFt=data['sqFt'],
            design_type=data['design_type'],
            price_per_day=data['price_per_day']
        )

        db.session.add(new_spot)
        db.session.commit()
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


@spot_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_spot(id):
    spot = Spot.query.get(id)
    form = SpotForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        spot.address = data['address'],
        spot.title = data['title'],
        spot.description = data['description'],
        spot.city = data['city'],
        spot.state = data['state'],
        spot.zip_code = data['zip_code'],
        spot.lng = data['lng'],
        spot.lat = data['lat'],
        spot.bedrooms = data['bedrooms'],
        spot.bathrooms = data['bathrooms'],
        spot.sqFt = data['sqFt'],
        spot.design_type = data['design_type'],
        spot.price_per_day = data['price_per_day']

        db.session.commit()
        return spot.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@spot_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_spot(id):
    spot = Spot.query.get(id)
    db.session.delete(spot)
    db.session.commit()
    return "Spot deleted successfully"
