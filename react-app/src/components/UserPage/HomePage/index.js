import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getReviews } from "../../../store/reviews";
import { getSpots } from "../../../store/spots";
import DesignNav from '../../Navigation/DesignNav';



const HomePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  
  useEffect(() => {
    if(user){
      dispatch(getReviews())
      dispatch(getSpots())
    }
  }, [dispatch, user])

  return (
    <div className="home-page">
      <DesignNav />
      <h1>WORKInG home page</h1>

    </div>
  )

}

export default HomePage;
