import { useSelector } from 'react-redux';
import {AiFillStar} from 'react-icons/ai'

function TotalReview({reviewIDs}){

  let reviews = useSelector(state => state.review)
  let sumOfRatings = 0;
  let length = reviewIDs?.length;

  let totalReview = () =>{
    reviewIDs.forEach(id => {
      sumOfRatings += reviews[id].rating;
    });
    return sumOfRatings/length;
  }
  let avgRating = totalReview()

  return(
  <div className="total-star-rating">
    <p>{parseFloat(avgRating).toFixed(2)} <AiFillStar /></p>
    {length} {length === 1 ? "Review" : "Reviews"}
  </div>
  )

}

export default TotalReview;
