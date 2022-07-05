import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { editReview } from '../../store/reviews';
import DeleteReview from './deleteReviews';


const EditReview = ({reviewProp, setEditOpen}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = reviewProp.id

  const realRating = reviewProp.rating*20
  const [adjRating, setAdjRating] = useState(realRating);
  const [review, setReview] = useState(reviewProp.review);

  const handleRating = (rate) => {
    setAdjRating(rate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review_id = reviewProp.id;
    const rating = adjRating/20

    const payload = {
      rating,
      review,
    };

    if (rating < 1 || rating > 5) {
      return alert('Please submit a rating between 1 to 5 stars')
    }

    setEditOpen(false)

    await dispatch(editReview(payload, review_id))
      .then (setEditOpen(false))
      .then(() => history.push(`/spots/${reviewProp.spotId}`))
  };

  return (
    <div className='RatingFormContainer'>
      <form onSubmit={handleSubmit} className='RatingForm'>
        <div className='RatingFormInner'>
          <label className='NewRatingLabel'>
            <div className='NewRatingDiv'>
              New Rating
            </div>
            <Rating onClick={handleRating} ratingValue={adjRating} emptyColor={'rgb(255, 255, 255)'} fillColor={'rgb(225,20,20)'} size={20} initialValue={0} allowHover={false}/>
          </label>
          <label className='NewRatingLabel'>
            <div className='NewRatingDiv'>
              Comments
            </div>
            <textarea
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='RatingFormInnerButtonsContainer'>
          <button type="submit" className='ReviewFormInnerButtons'>Submit</button>
          <DeleteReview reviewProp={reviewProp} setEditOpen={setEditOpen} className='ReviewFormInnerButtons' />
        </div>
      </form>
      <div className='ReviewFormActionButtonsContainer'>
        <div onClick={() => {setEditOpen(false)}} className='ReviewFormActionButtons CloseBtn'>Close</div>
      </div>
    </div>
  );
};

export default EditReview;
