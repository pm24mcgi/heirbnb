import { useSelector } from "react-redux";

function ProfileReviews() {
  const user = useSelector(state => state.session.user);
  const reviews = useSelector(state => state.review);
  const reviewsArr = Object.values(reviews);
  const userReviews = reviewsArr.filter(review => user.id === review.userId)
  // const spots = useSelector(state => state.spot);
  // const spotsArr = Object.values(spots);


  return (
    <div className="profile-reviews-page profile-section">
      {userReviews.map(review => {
        return (
          <div>
            Rating: {review.rating}
            <br />
            Review: {review.review}
          </div>
        )
      })}
    </div>

  )
}

export default ProfileReviews;
