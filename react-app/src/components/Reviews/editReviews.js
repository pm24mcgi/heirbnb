import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { editReview } from '../../store/reviews';
import DeleteReview from './deleteReviews';


const EditReview = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const propertyId = note.propertyId;
  // const id = note.id;

  const reviewObject = useSelector(state => state.reviews)
  const thisReview = reviewObject//[id]

  const [adjRating, setAdjRating] = useState(thisReview.adjRating || '');
  const [review, setReview] = useState(thisReview.review || '');

  // useEffect (() => {
  //   setAdjRating(thisReview.description)
  //   setReview(thisReview.review)
  // }, [id])

  const handleRating = (rate) => {
    setAdjRating(rate)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review_id = 4;
    const rating = adjRating/20

    const payload = {
      rating,
      review,
    };

    await dispatch(editReview(payload, review_id))
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
      <DeleteReview />
    </div>
  );
};

export default EditReview;
