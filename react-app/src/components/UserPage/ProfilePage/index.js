import { Switch, Route } from "react-router-dom";
import ProfileBookings from "./ProfileBookings";
import ProfileListings from "./ProfileListings";
import ProfileReviews from "./ProfileReviews";
import ProfilePage from "./ProfilePage";


function ProfileRoutes() {


  return (
    <>
      <Switch>
        <Route path='/profile' exact ={true}>
          <ProfilePage />
        </Route>
        <Route path='/profile/bookings'>
          <ProfileBookings />
        </Route>
        <Route path='/profile/listings' >
          <ProfileListings />
        </Route>
        <Route path='/profile/reviews' >
          <ProfileReviews />
        </Route>
      </Switch>

    </>
  )
}

export default ProfileRoutes;
