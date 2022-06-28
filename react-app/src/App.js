import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { getSpots } from "./store/spots";
import { getReviews } from "./store/reviews";
import GetReviews from "./components/UserPage/SpotsPage/Details/getReviews";
import SpotsList from "./components/Spots/SpotsList";
import SingleSpot from "./components/Spots/SingleSpot/SingleSpot";

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

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
			<NavBar />
			<Switch>
				<Route path="/login" exact={true}>
					<LoginForm />
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm />
				</Route>
				<ProtectedRoute path="/users" exact={true}>
					<UsersList />
				</ProtectedRoute>
				<ProtectedRoute path="/users/:userId" exact={true}>
					<User />
				</ProtectedRoute>
				<ProtectedRoute path="/" exact={true}>
					<h1>My Home Page</h1>
				</ProtectedRoute>
				<ProtectedRoute path="/reviews" exact={true}>
					<h1>Reviews Page</h1>
					<GetReviews />
				</ProtectedRoute>
				<ProtectedRoute path="/spots" exact={true}>
					<SpotsList />
				</ProtectedRoute>
				<ProtectedRoute path="/spots/:spotId" exact={true}>
					<SingleSpot />
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
