from flask import Blueprint, jsonify, session, request
from app.models import Spot, db
from app.forms import spot_form
from flask_login import current_user, login_user, logout_user, login_required

spot_routes = Blueprint('spots', __name__)


# Route provides all avaialble spots
# @spot_routes.route('/')
# @login_required
# def all_spots():
