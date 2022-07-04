import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DesignNav from '../../Navigation/DesignNav';
import { getBookings } from "../../../store/bookings";
import { getSpots } from "../../../store/spots";
import { getReviews } from "../../../store/reviews";
import SpotsLayout from "../../Spots/SpotsLayout";


const HomePage = () => {
  const dispatch = useDispatch()
  const spots = Object.values(useSelector(state => state.spot))


  useEffect(() => {
    dispatch(getSpots())
    dispatch(getReviews())
    dispatch(getBookings())
  }, [dispatch])



  return (
    <div className="home-page">
      <DesignNav />
      <SpotsLayout spots={spots} />
    </div>
  )

}

export default HomePage;
