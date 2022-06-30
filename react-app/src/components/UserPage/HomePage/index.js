import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getBookings } from "../../../store/bookings";

import { getReviews } from "../../../store/reviews";
import { getSpots } from "../../../store/spots";
import { getBookings } from "../../../store/bookings"

import DesignNav from '../../Navigation/DesignNav';
import SpotsCard from "../../Spots/SpotsCard";



const HomePage = () => {
  const { design_type } = useParams();

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const spots = Object.values(useSelector(state => state.spot))

  useEffect(() => {
    if (user) {
      dispatch(getReviews())
      dispatch(getSpots())
    }
  }, [dispatch, user])

  let filter_spots;
  if (design_type) {
    filter_spots = spots.filter(spot => spot.designType === design_type)
  }

  console.log(filter_spots)
  return (
    <div className="home-page">
      <DesignNav />
      <div className="spots-card-container">
        {design_type ? filter_spots.map(spot => (
          <SpotsCard spot={spot} />
        ))
        :
        spots.map(spot => (
          <SpotsCard spot={spot} />
        ))
        }

      </div>

    </div>
  )

}

export default HomePage;
