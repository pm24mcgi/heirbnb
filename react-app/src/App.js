import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation/index";
import UserViewPage from "./components/UserViewPage";
import GetReviews from "./components/Reviews/getReviews";
import ReviewForm from "./components/Reviews/postReviews";
import CreateSpot from "./components/Spots/SpotsForm/CreateSpot";
import SingleSpot from "./components/Spots/SingleSpot/SingleSpot";
import EditSpot from "./components/Spots/SpotsForm/EditSpot";
import HomePage from "./components/UserPage/HomePage";
import Calendar from "./components/UserPage/BookingsPage/Calendar";
import { getBookings } from "./store/bookings";
import { getSpots } from "./store/spots";
import { getReviews } from "./store/reviews";

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

	useEffect(() => {
		(async () => {
			if (user) {
				await dispatch(getBookings());
				await dispatch(getSpots());
				await dispatch(getReviews());
			}
		})();
	}, [dispatch, user]);

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
				<ProtectedRoute path="/users" exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path="/users/:userId" exact={true}>
					<User />
				</ProtectedRoute>
				<ProtectedRoute path="/spots/new" exact={true}>
					<CreateSpot />
				</ProtectedRoute>
				<ProtectedRoute path="/spots/:spotId" exact={true}>
					<Calendar />
					<SingleSpot />
					<GetReviews />
					<ReviewForm />
				</ProtectedRoute>
				<ProtectedRoute path="/spots/:spotId/edit" exact={true}>
					<EditSpot />
				</ProtectedRoute>
				<ProtectedRoute path="/spots/types/:design_type" exact={true}>
					<HomePage />
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
