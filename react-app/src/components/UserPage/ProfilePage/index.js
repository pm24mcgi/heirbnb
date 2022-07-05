import { Switch, Route } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";

import ProfileListings from "./ProfileListings";
import ProfilePage from "./ProfilePage";
import { getSpots } from "../../../store/spots";
import { getReviews } from "../../../store/reviews";
import { getBookings } from "../../../store/bookings";


function ProfileRoutes() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);
  const bookings = Object.values(useSelector(state => state.booking));
  const spots = Object.values(useSelector(state => state.spot));
  const myBookings = bookings.filter(booking => user.bookings.includes(booking.id))
  const mySpots = spots.filter( spot => user.spots.includes(spot.id))


	useEffect(() => {
		(async () => {
			await dispatch(getSpots());
			await dispatch(getReviews());
			await dispatch(getBookings());
		})();

	}, [dispatch])
  return (
    <>
      <Switch>
        <Route path='/profile' exact ={true}>
          <ProfilePage user={user} myBookings={myBookings}/>
        </Route>
        <Route path='/profile/listings' >
          <ProfileListings user={user} mySpots={mySpots} />
        </Route>
      </Switch>

    </>
  )
}

export default ProfileRoutes;
