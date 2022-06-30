import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Calendar from "../../UserPage/BookingsPage/Calendar";
import GetReviews from "../../Reviews/getReviews";
import ReviewForm from "../../Reviews/postReviews";
import DeleteSpot from "./DeleteSpot";

const SingleSpot = () => {
	const { spotId } = useParams();
	const spot = useSelector((state) => state.spot[spotId]);

	if (!spot) {
		return <h1>No Spots are being shown</h1>;
	} else {
		return (
			<div>
				<h2>Spot By ID</h2>
				<div key={spot?.id}>
					<div>Title: {spot?.title}</div>
					<div>Description: {spot?.description}</div>
					<div>State: {spot?.state}</div>
					<div>City: {spot?.city}</div>
					<div>Host: {spot?.host.username}</div>
					<div>Number of bedrooms: {spot?.bedrooms}</div>
					<div>Price per day: ${spot?.pricePerDay}</div>
				</div>
				<DeleteSpot spotId={spotId} />
				<button>
					<Link to={`/spots/${spotId}/edit`}>Edit Spot</Link>
				</button>
				<Calendar />
				<GetReviews />
				<ReviewForm />
			</div>
		);
	}
};

export default SingleSpot;
