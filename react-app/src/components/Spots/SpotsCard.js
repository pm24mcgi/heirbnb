import ImageSlider from '../Tools/ImageSlider.js';
import TotalReview from '../Tools/TotalReview.js';

function SpotsCard({ spot }) {

  return (
    <div className="spots-card">
      <ImageSlider spot={spot} />
      <div className='spots-card-bottom'>
        <div className="spots-card-header">
          <p className="spots-card-bold">{spot.city}, {spot.state}</p>
          <TotalReview reviewIDs={spot.reviews} />
        </div>
        <p className="spots-card-bold">${spot.price_per_day.toLocaleString('en-US')} night</p>
      </div>
    </div>
  )
}

export default SpotsCard;
