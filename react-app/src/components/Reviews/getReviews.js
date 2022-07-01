import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import EditReview from "./editReviews";

const GetReviews = () => {
  const reviews = Object.values(useSelector(state => state.review))
  const {spotId} = useParams();
  const spot = useSelector(state => state.spot[spotId])
  const revArr = spot.reviews

  if (!reviews) {
    return(
      <div>This property has not yet been reviewed</div>
    )
  } else {
    return (
      <div>
        <h2>Reviews:</h2>
        {reviews.map((review) => {
          if (spotId == review.spotId) {
            return (
              <div key={review.id}>{review.review}
                <Rating ratingValue={review.rating*20} fillColor={'rgb(225,20,20)'} readonly={true} size={20} />
                <EditReview reviewProp={review}/>
              </div>
            )
          }
        })}
      </div>
    )
  }
};

export default GetReviews;
