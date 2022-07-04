import googlemaps
from datetime import datetime
from flask import Blueprint
from app.config import Config
from flask_login import login_required, current_user

map_routes = Blueprint('map', __name__)
gmaps = googlemaps.Client(key=Config.googleAPIKey)


@map_routes.route('', methods=['POST'])
def google_api_key():
    return {'googleAPIKey': Config.googleAPIKey}
