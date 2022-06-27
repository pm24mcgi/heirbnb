import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postReview } from '../../../../store/reviews'

// should not be allowed to review property more than once?
// set review value defaulted to false, , onsubmit true, if conditional to submit

const ReviewForms = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      description,
      body,
      propertyId
    };
    await dispatch(postNote(payload))
        .then(() => history.push(`/properties/${propertyId}`))

    setAddNoteOpen(false);
  };


  return (
    <div>
    </div>
  )
};

export default ReviewForms;
