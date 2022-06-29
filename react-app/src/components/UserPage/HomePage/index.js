import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBookings } from "../../../store/bookings";

import { getReviews } from "../../../store/reviews";
import { getSpots } from "../../../store/spots";

import DesignNav from '../../Navigation/DesignNav';
import SpotsCard from "../../Spots/SpotsCard";



const HomePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const spots = Object.values(useSelector(state => state.spot))
  useEffect(() => {
    if (user) {
      dispatch(getReviews())
      dispatch(getSpots())
    }
  }, [dispatch, user])

  return (
    <div className="home-page">
      <DesignNav />
      <div className="spots-card-container">
        {spots.map(spot => (
          <NavLink to={`/spots/${spot?.id}`} key={spot?.id}>
            <SpotsCard spot={spot} />
          </NavLink>

        ))}

      </div>

    </div>
  )

}

export default HomePage;
