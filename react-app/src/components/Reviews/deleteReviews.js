import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'

const DeleteReview = ({reviewProp}) => {
  console.log(reviewProp, "DELETE COMPONENT ENTRY")
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReview(reviewProp.id))
    return history.push(`/spots/${reviewProp.spotId}`)
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  )
}

export default DeleteReview
