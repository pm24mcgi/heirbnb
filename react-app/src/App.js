import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation/index";
import UserViewPage from "./components/UserViewPage";
import CreateSpot from "./components/Spots/SpotsForm/CreateSpot";
import SingleSpot from "./components/Spots/SingleSpot/SingleSpot";
import EditSpot from "./components/Spots/SpotsForm/EditSpot";
import HomePage from "./components/UserPage/HomePage";
import ProfileRoutes from "./components/UserPage/ProfilePage"
import BookingDetail from "./components/UserPage/BookingsPage/BookingDetail";
import NotFoundPage from "./components/NotFoundPage";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());

      setLoaded(true);
    })();
  }, [dispatch]);



  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact={true}>
          <UserViewPage />
        </Route>
        <ProtectedRoute path={["/profile", "/profile/bookings", "/profile/listings","/profile/reviews" ]} exact={true}>
          <ProfileRoutes />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/spots/new" exact={true}>
          <CreateSpot />
        </ProtectedRoute>
        <ProtectedRoute path="/spots/:spotId" exact={true}>
          <SingleSpot />
        </ProtectedRoute>
        <ProtectedRoute path="/spots/:spotId/edit" exact={true}>
          <EditSpot />
        </ProtectedRoute>
        <ProtectedRoute path="/spots/types/:design_type" exact={true}>
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/bookings' exact={true}>
          <BookingDetail />
        </ProtectedRoute>
        <NotFoundPage />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
