import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import EditReview from "./editReviews";

const GetReviews = () => {
  const reviews = Object.values(useSelector(state => state.review))
  const user = useSelector(state => state.session.user);
  const {spotId} = useParams();

  const [editOpen, setEditOpen] = useState(false)

  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.map((review) => {
        if (spotId == review.spotId) {
          return (
            <div key={review.id}>{review.review}
              <Rating ratingValue={review.rating*20} fillColor={'rgb(225,20,20)'} readonly={true} size={20} />
              <div>
                {user.id === review.userId ?
                <div>
                  <button onClick={() => setEditOpen(!editOpen)}>Edit Review</button>
                  {editOpen && <EditReview setEditOpen={setEditOpen} reviewProp={review}/>}
                </div> : null}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
};

export default GetReviews;
