import React, { useEffect, useState } from 'react';

const Ratings = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0);

  return (
    <div>
      <h2>Rating from state: {rating}</h2>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  )
};

export default Ratings;
