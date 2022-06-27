from flask import Blueprint, jsonify, session, request
from app.models import Review, db
from app.forms import review_form
from flask_login import current_user, login_user, logout_user, login_required

review_routes = Blueprint('reviews', __name__)


# Route provides all avaialble reviews
@review_routes.route('/')
@login_required
def all_reviews():
  reviews = Review.query.all()
  return {'reviews': [review.to_dict() for review in reviews]}
