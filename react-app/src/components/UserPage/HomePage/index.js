import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DesignNav from '../../Navigation/DesignNav';
import SpotsCard from "../../Spots/SpotsCard";
import { getBookings } from "../../../store/bookings";
import { getSpots } from "../../../store/spots";
import { getReviews } from "../../../store/reviews";


const HomePage = () => {
  const { design_type } = useParams();

  const dispatch = useDispatch()
  // const user = useSelector(state => state.session.user)
  const spots = Object.values(useSelector(state => state.spot))

  useEffect(() => {
    dispatch(getSpots())
    dispatch(getReviews())
    // dispatch(getBookings())
  }, [dispatch])


  let filter_spots;
  if (design_type) {
    filter_spots = spots.filter(spot => spot.design_type === design_type)
  }

  return (
    <div className="home-page">
      <DesignNav />
      <div className="spots-card-container">
        {design_type ? filter_spots.map(spot => (
          <SpotsCard spot={spot} key={spot.id} />
        ))
          :
          spots.map(spot => (
            <SpotsCard spot={spot} key={spot.id} />
          ))
        }

      </div>

    </div>
  )

}

export default HomePage;
