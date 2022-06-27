import React, { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
// https://www.npmjs.com/package/react-star-rating-component

const { rating } = this.state;

const GetTotalRatings = () => {
  return (
    <div>
      <h2>Rating from state: {rating}</h2>
        <StarRatingComponent
          name="crowns"
          editing={false}
          // renderStarIcon={() => <span></span>}
          starCount={5}
          value={rating}
        />
    </div>
  )
};

export default GetTotalRatings;
