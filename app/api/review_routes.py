from flask import Blueprint
from flask_login import login_required
from app.models import Review

review_routes = Blueprint('reviews', __name__)


# Route provides all avaialble reviews
@review_routes.route('/')
@login_required
def all_reviews():
    reviews = Review.query.all()
    return {review.id: review.to_dict() for review in reviews}
