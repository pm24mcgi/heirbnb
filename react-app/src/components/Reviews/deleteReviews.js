import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'

const DeleteReview = ({review_id, spot_id}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review_id))
    return history.push(`/spots/${spot_id}`)
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  )
}

export default DeleteReview
