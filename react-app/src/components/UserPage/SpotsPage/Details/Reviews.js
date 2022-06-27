import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../../store/reviews'

// TODO - sort reviews by most recent first\

const Reviews = () => {
  console.log('--------did I hit this??????----------')
  const dispatch = useDispatch();
  const reviews = Object.values(useSelector(state => state.reviews))

  useEffect (() => {
    console.log('--------did I hit this??????----------')
    dispatch(getReviews())
  }, [])

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
            <div>{review.review}</div>
          )
        })}
      </div>
    )
  }
};

export default Reviews;
