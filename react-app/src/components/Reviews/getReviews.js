import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews'
import { Rating } from 'react-simple-star-rating'
import EditReview from "./editReviews";

// TODO - sort reviews by most recent first\

const GetReviews = () => {
  const dispatch = useDispatch();
  const reviews = Object.values(useSelector(state => state.review))

  // useEffect (() => {
  //   dispatch(getReviews())
  // }, [])

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
              {console.log(review.id, "<--------- KEYSSSSSSSS")}
              <Rating ratingValue={review.rating*20} fillColor={'rgb(225,20,20)'} readonly={true} size={20} />
              <EditReview reviewProp={review}/>
            </div>
          )
        })}
      </div>
    )
  }
};

export default GetReviews;
