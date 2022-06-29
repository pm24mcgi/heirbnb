import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postReview } from '../../store/reviews'
import { Rating } from 'react-simple-star-rating'

// should not be allowed to review property more than once?
// set review value defaulted to false, , onsubmit true, if conditional to submit

const ReviewForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [adjRating, setAdjRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRating = (rate) => {
    setAdjRating(rate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const spot_id = 1;
    const rating = adjRating/20

    const payload = {
      spot_id,
      rating,
      review,
    };

    await dispatch(postReview(payload, spot_id))
      .then(() => history.push(`/spots`))
  };

  return (
    <div>
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
    </div>
  );
};
//editt

export default ReviewForm;
