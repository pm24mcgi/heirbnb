import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function ProfileListings() {
  const user = useSelector(state => state.session.user);
  const spots = useSelector(state => state.spot);
  const spotsArr = Object.values(spots)
  const userSpots = spotsArr.filter(spot => user.id === spot.host.id)

  return (
    <div className="profile-listings-page profile-section">
      {userSpots.map(spot => {
        return (
          <Link key={spot.id} className='spot-detail-link' to={`/spots/${spot.id}`}>
            <div>
              <h4>{spot.title}</h4>
              <p>${spot.price_per_day}/night</p>
              <img src={spot.images[0].url} />
            </div>
          </Link>
        )
      })}
    </div>

  )
}

export default ProfileListings;
