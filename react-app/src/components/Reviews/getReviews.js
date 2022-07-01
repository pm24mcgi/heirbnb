import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import EditReview from "./editReviews";

const GetReviews = () => {
  const reviews = Object.values(useSelector(state => state.review))
  const user = useSelector(state => state.session.user);
  console.log(user.id)
  const {spotId} = useParams();
  const spot = useSelector(state => state.spot[spotId])

  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.map((review) => {
        if (spotId == review.spotId) {
          console.log(review)
          return (
            <div key={review.id}>{review.review}
              <Rating ratingValue={review.rating*20} fillColor={'rgb(225,20,20)'} readonly={true} size={20} />
              <div>
                {user.id === review.userId ? <EditReview reviewProp={review}/> : null}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
};

export default GetReviews;
