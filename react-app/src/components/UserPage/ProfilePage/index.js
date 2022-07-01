import { Switch, Route } from "react-router-dom";
import {useSelector} from 'react-redux';

import ProfileBookings from "./ProfileBookings";
import ProfileListings from "./ProfileListings";
import ProfileReviews from "./ProfileReviews";
import ProfilePage from "./ProfilePage";


function ProfileRoutes() {
  const user = useSelector(state => state.session.user);


  return (
    <>
      <Switch>
        <Route path='/profile' exact ={true}>
          <ProfilePage user={user}/>
        </Route>
        <Route path='/profile/bookings'>
          <ProfileBookings user={user}/>
        </Route>
        <Route path='/profile/listings' >
          <ProfileListings user={user} />
        </Route>
        <Route path='/profile/reviews' >
          <ProfileReviews user={user}/>
        </Route>
      </Switch>

    </>
  )
}

export default ProfileRoutes;
