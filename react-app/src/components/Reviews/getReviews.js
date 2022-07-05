import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import EditReview from "./editReviews";
import profilePicture from '../../images/ProfilePic.png'

const GetReviews = () => {
  const reviews = Object.values(useSelector(state => state.review))
  const user = useSelector(state => state.session.user);
  const {spotId} = useParams();

  const [editOpen, setEditOpen] = useState(false)

  let revCount = 0
  let totalRatingAdd = 0

  reviews.map((review) => {
    if (review.spotId == spotId) {
      revCount++
      totalRatingAdd += review.rating
    }
  })

  let totalRating = (totalRatingAdd/revCount).toFixed(1)

  return (
    <div>
      <h2>{revCount} Reviews</h2>
      {revCount > 0 ?
      <h3>{totalRating} Stars</h3>
      : null
      }
      {reviews.map((review) => {
        if (spotId == review.spotId) {
          return (
            <div key={review.id} className='ReviewCardContainer'>
              <div className='ReviewHeaderContainer'>
                <img src={review.photo ? review.photo : profilePicture} alt="avatar" id='getReviewsPhoto'></img>
                <div className='ReviewHeaderRightContainer'>
                  <div className='ReviewUsername'>{review.username}</div>
                  <Rating ratingValue={review.rating*20} fillColor={'rgb(225,20,20)'} readonly={true} size={20} />
                </div>
              </div>
              <div>
                {review.review}
                <div>
                  {user.id === review.userId ?
                  <div>
                    {!editOpen && <button onClick={() => setEditOpen(!editOpen)} className='EditReviewFormButton'>Edit Review</button>}
                    {editOpen && <EditReview setEditOpen={setEditOpen} reviewProp={review}/>}
                  </div> : null}
                </div>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
};

export default GetReviews;
