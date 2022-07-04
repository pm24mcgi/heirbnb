import { useSelector } from "react-redux";

function ProfileReviews() {
  const user = useSelector(state => state.session.user);
  const reviews = useSelector(state => state.review);
  const spots = useSelector(state => state.spot)
  const reviewsArr = Object.values(reviews);
  const userReviews = reviewsArr.filter(review => user.id === review.userId)

  return (
    <div className="profile-reviews-page profile-section">
      <h1>
        Your Reviews:
      </h1>
      {userReviews.map(review => {
        return (
          <div key={review.id} className='profile-page-review-map'>
            <div className="profile-page-review-map-header">
              {`${spots[review.spotId].address}, ${spots[review.spotId].city}, ${spots[review.spotId].state}`}
            </div>
            Stars: {review.rating}
            <br />
            Review: {review.review}
          </div>
        )
      })}
    </div>

  )
}

export default ProfileReviews;
