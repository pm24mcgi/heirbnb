import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postReview } from '../../../../store/reviews'

// should not be allowed to review property more than once?
// set review value defaulted to false, , onsubmit true, if conditional to submit

const ReviewForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    console.log('FE entry')
    e.preventDefault();

    const spot_id = 1;

    const payload = {
      spot_id,
      rating,
      review,
    };

    await dispatch(postReview(payload, spot_id))
      .then (console.log('FE exit'))
      .then(() => history.push(`/spots`))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Rating
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
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

export default ReviewForm;
