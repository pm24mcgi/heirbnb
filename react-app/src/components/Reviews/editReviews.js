import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { editReview } from '../../store/reviews';
import DeleteReview from './deleteReviews';


const EditReview = ({reviewProp}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [adjRating, setAdjRating] = useState(0);
  const [review, setReview] = useState('');

  const [editOpen, setEditOpen] = useState(false)

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

    await dispatch(editReview(payload, review_id))
      .then(() => history.push(`/spots/${reviewProp.spotId}`))
  };

  return (
    <div>
      <button onClick={() => setEditOpen(!editOpen)}> Edit
        <form onSubmit={handleSubmit}>
          <label>
            Rating
            <Rating onClick={handleRating} ratingValue={adjRating} fillColor={'rgb(225,20,20)'} size={20} allowHalfIcon={true} showTooltip={true} tooltipDefaultText={'Your Rating'}/>
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
        <DeleteReview reviewProp={reviewProp}/>
      </button>
    </div>
  );
};

export default EditReview;
