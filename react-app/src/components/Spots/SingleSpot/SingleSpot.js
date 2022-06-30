import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { eraseSpot } from "../../../store/spots";

const SingleSpot = () => {
	const { spotId } = useParams();
	// console.log(spotId)
	const dispatch = useDispatch();
	const spot = useSelector((state) => state.spot[spotId]);
	// console.log(spot)

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
				<button onClick={() => dispatch(eraseSpot(spotId))}>Delete Spot</button>
				<button><Link to={`/spots/${spotId}/edit`}>Edit Spot</Link></button>
			</div>
		);
	}
};

export default SingleSpot;
