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

  const [adjRating, setAdjRating] = useState(0);
  const [review, setReview] = useState('');

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

    setEditOpen(false)

    await dispatch(editReview(payload, review_id))
      .then (setEditOpen(false))
      .then(() => history.push(`/spots/${reviewProp.spotId}`))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Rating
          <Rating onClick={handleRating} ratingValue={adjRating} fillColor={'rgb(225,20,20)'} size={20} initialValue={1} allowHover={false}/>
        </label>
        <label>
          Deatils
          <textarea
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <DeleteReview reviewProp={reviewProp} setEditOpen={setEditOpen}/>
      <div onClick={() => {setEditOpen(false)}}>Close</div>
    </div>
  );
};

export default EditReview;
