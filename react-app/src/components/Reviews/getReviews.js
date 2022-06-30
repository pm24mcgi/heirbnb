import React from 'react';
import { useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating'
import EditReview from "./editReviews";

const GetReviews = () => {
  const reviews = Object.values(useSelector(state => state.review))

  if (!reviews) {
    return(
      <div>This property has not yet been reviewed</div>
    )
  } else {
    return (
      <div>
        <h2>Reviews:</h2>
        {reviews.map((review) => {
          return (
            <div key={review.id}>{review.review}
              <Rating ratingValue={review.rating*20} fillColor={'rgb(225,20,20)'} readonly={true} size={20} />
              <EditReview reviewProp={review}/>
            </div>
          )
        })}
      </div>
    )
  }
};
//edit

export default GetReviews;
