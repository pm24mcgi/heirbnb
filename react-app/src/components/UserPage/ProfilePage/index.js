import { Switch, Route } from "react-router-dom";
import {useSelector} from 'react-redux';

import ProfileBookings from "./ProfileBookings";
import ProfileListings from "./ProfileListings";
import ProfileReviews from "./ProfileReviews";
import ProfilePage from "./ProfilePage";


function ProfileRoutes() {
  const user = useSelector(state => state.session.user);
  const bookings = Object.values(useSelector(state => state.booking));
  const reviews = Object.values(useSelector(state => state.review));
  const spots = Object.values(useSelector(state => state.spot));
  const myBookings = bookings.filter(booking => user.bookings.includes(booking.id))
  const myReviews = reviews.filter(review => user.spots.includes(review.spotId))
  const mySpots = spots.filter( spot => user.spots.includes(spot.id))

  return (
    <>
      <Switch>
        <Route path='/profile' exact ={true}>
          <ProfilePage user={user} myBookings={myBookings}/>
        </Route>
        <Route path='/profile/listings' >
          <ProfileListings user={user} mySpots={mySpots} />
        </Route>
        <Route path='/profile/reviews' >
          <ProfileReviews user={user} myReviews={myReviews}/>
        </Route>
      </Switch>

    </>
  )
}

export default ProfileRoutes;
