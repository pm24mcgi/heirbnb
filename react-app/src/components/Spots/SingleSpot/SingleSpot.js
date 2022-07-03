import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Calendar from "../../UserPage/BookingsPage/Calendar";
import GetReviews from "../../Reviews/getReviews";
import ReviewForm from "../../Reviews/postReviews";
import DeleteSpot from "./DeleteSpot";
import PhotoAlbum from "react-photo-album";

const SingleSpot = () => {
	const { spotId } = useParams();
	const [disable, setDisable] = useState(true);
	const spot = useSelector((state) => state.spot[spotId]);
	const userId = useSelector((state) => state.session.user.id);
	const reviewsArr = useSelector((state) => state.spot[spotId]?.reviews);
	const images = spot.images;
	const imagesArr = Object.values(images);

	const disableHandler = (reviews, userId) => {
		if (reviews?.length > 0) {
			for (let i = 0; i < reviews?.length; i++) {
				let review = reviews[i];
				if (review.user_id === userId) {
					return false;
				}
			}
		}
		return true;
	};

	useEffect(() => {
		setDisable(disableHandler(reviewsArr, userId));
	}, [reviewsArr, userId, disable]);

	if (!spot) {
		return <h1>No Spots are being shown</h1>;
	} else {
		return (
			<div>
				<div key={spot?.id}>
					<h2>{spot?.title}</h2>
					<PhotoAlbum layout='rows' photos={imagesArr} />
					<div>Description: {spot?.description}</div>
					<div>State: {spot?.state}</div>
					<div>City: {spot?.city}</div>
					<div>Host: {spot?.host.username}</div>
					<div>Number of bedrooms: {spot?.bedrooms}</div>
					<div>Price per day: ${spot?.price_per_day}</div>
				</div>
				<DeleteSpot spotId={spotId} />
				<button>
					<Link key={spotId} to={`/spots/${spotId}/edit`}>Edit Spot</Link>
				</button>
				<Calendar />
				<GetReviews />
				{disable && <ReviewForm />}
			</div>
		);
	}
};

export default SingleSpot;
