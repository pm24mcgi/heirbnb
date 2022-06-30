import ImageSlider from '../Tools/ImageSlider.js';
import TotalReview from '../Tools/TotalReview.js';

function SpotsCard({spot}){

console.log(spot.reviews)

  return(
    <div className="spots-card">
      <ImageSlider images={spot?.images} />
      <div className='spots-card-bottom'>
        <div className="spots-card-header">
        <p>{spot.city}, {spot.state}</p>
        <TotalReview reviewIDs={spot.reviews} />
        </div>
      </div>
    </div>
  )
}

export default SpotsCard;