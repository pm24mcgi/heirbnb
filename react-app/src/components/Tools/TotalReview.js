import { useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai'

function TotalReview({ reviews }) {

  let allReviews = useSelector(state => state.review)
  let sumOfRatings = 0;
  let length = reviews?.length;


  let totalReview = () => {
    reviews.forEach(review => {
      sumOfRatings += allReviews[review.id]?.rating;
    });
    return sumOfRatings / length;
  }
  let avgRating = totalReview()

  return (
    <div className="total-star-rating">
      {length === 0 ? <p className='review'>No Reviews</p> :
        <>
          <p>{parseFloat(avgRating).toFixed(2)} <AiFillStar /></p>
          <p className='review'>{length} Reviews</p>
        </>
      }
    </div>
  )

}

export default TotalReview;
