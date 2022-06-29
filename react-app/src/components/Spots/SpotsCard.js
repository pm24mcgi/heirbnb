import ImageSlider from '../Tools/ImageSlider.js';

function SpotsCard({spot}){


  return(
    <div className="spots-card">
      <ImageSlider images={spot?.images} />
      <p>{spot?.title}</p>
    </div>
  )
}

export default SpotsCard;
