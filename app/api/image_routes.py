from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required, current_user
from .utils import validation_errors_to_error_messages

from app.models import Image, db

image_routes = Blueprint('images', __name__)

@image_routes('')
@login_required
def all_images():
  images = Image.query.all()

  return {image.id: image.to_dict() for image in images }
