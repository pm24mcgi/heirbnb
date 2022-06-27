from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, Spot, db
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# Route provides all avaialble reviews
@review_routes.route('')
@login_required
def all_reviews():
    reviews = Review.query.all()
    return {review.id: review.to_dict() for review in reviews}


@review_routes.route('/<int:spot_id>/new', methods=['POST'])
@login_required
def new_review(spot_id):
    print(current_user.to_dict())
    form = ReviewForm()
    # spot = Spot.query.get(id)
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
            user_id=current_user.to_dict()['id'],
            spot_id=spot_id,
            rating=data['rating'],
            review=data['review']
        )

        db.session.add(new_review)
        db.session.commit()
        print(new_review.to_dict())
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
