import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SpotsList = () => {
	const spots = Object.values(useSelector((state) => state.spot));

	if (!spots) {
		return <h1>No Spots are being shown</h1>;
	} else {
		return (
			<div>
				<h2>Spots</h2>
				{spots.map((spot) => {
					return (
						<div key={spot.id}>
							<div>Title: {spot.title}</div>
							<div>Description: {spot.description}</div>
							<div>State: {spot.state}</div>
							<div>City: {spot.city}</div>
							<div>Host: {spot.host.username}</div>
							<div>Number of bedrooms: {spot.bedrooms}</div>
							<div>Price per day: ${spot.price_per_day}</div>
							<br />
						</div>
					);
				})}
			</div>
		);
	}
};

export default SpotsList;
