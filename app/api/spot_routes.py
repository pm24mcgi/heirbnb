from flask import Blueprint, jsonify, session, request
from app.models import Spot, db
from app.forms import spot_form
from flask_login import login_required

from ..models.spot import Spot

spot_routes = Blueprint('spots', __name__)


# Route provides all avaialble spots
@spot_routes.route('/')
@login_required
def all_spots():
  spots = Spot.query.all()
  print(spots)
  return {spot.id: spot.to_dict() for spot in spots}
