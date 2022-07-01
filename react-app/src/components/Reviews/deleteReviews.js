import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'
import { getSpots } from '../../store/spots';

const DeleteReview = ({reviewProp}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(reviewProp.id))
    dispatch(getSpots())
    return history.push(`/spots/${reviewProp.spotId}`)
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  )
}

export default DeleteReview
