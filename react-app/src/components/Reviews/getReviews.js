import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews'
import { Rating } from 'react-simple-star-rating'

// TODO - sort reviews by most recent first\

const GetReviews = () => {
  const dispatch = useDispatch();
  const reviews = Object.values(useSelector(state => state.review))

  useEffect (() => {
    dispatch(getReviews())
  }, [dispatch, reviews])

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
            </div>
          )
        })}
      </div>
    )
  }
};

export default GetReviews;
