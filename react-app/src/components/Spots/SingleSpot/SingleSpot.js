import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Calendar from "../../UserPage/BookingsPage/Calendar";
import GetReviews from "../../Reviews/getReviews";
import ReviewForm from "../../Reviews/postReviews";
import DeleteSpot from "./DeleteSpot";
import PhotoAlbum from "react-photo-album";
import AmenitiesCard from "./AmenitiesCard.js";
import "./SingleSpot.css";

const SingleSpot = () => {
	const history = useHistory();
	const { spotId } = useParams();
	const [disable, setDisable] = useState(true);
	const spot = useSelector((state) => state.spot[spotId]);
	const user = useSelector((state) => state.session.user);
	const reviewsArr = useSelector((state) => state.spot[spotId]?.reviews);
	const images = spot?.images;
	const imagesArr = Object.values(images);

	const disableHandler = (reviews, userId) => {
		if (reviews?.length > 0) {
			for (let i = 0; i < reviews?.length; i++) {
				let review = reviews[i]
				if (review.user_id === userId) {
					return false;
				}
			}
		}
		return true;
	};

	const onClickEdit = () => {
		history.push(`/spots/${spotId}/edit`);
	};

	useEffect(() => {
		setDisable(disableHandler(reviewsArr, user.id));
	}, [reviewsArr, user.id, disable]);

	if (!spot) {
		return <h1>No Spots are being shown</h1>;
	} else {
		return (
			<div className="singleSpotBody">
				<div key={spot?.id}>
					<div className="spotHeader">
						<div className="spotHeaderInfo">
							<h2>{spot?.title}</h2>
							<h4>
								{spot?.city}, {spot?.state}
							</h4>
						</div>
						<div className="spotHeaderButtons">
							{spot.host.id == user.id && (
								<div>
									<DeleteSpot spotId={spotId} />
									<button onClick={onClickEdit} className="editSpotBtn">
										Edit Spot
									</button>
								</div>
							)}
						</div>
					</div>
					<div className="imagesSpot">
						{imagesArr.map((image, i) => {
							return (
								<img
									className="singleImageSpot"
									src={image.url}
									alt={image}
									key={i}
								/>
							);
						})}
					</div>
					<div className="divisionSpace">
						<div className="divisionLeft">
							<p className="spotDescription">{spot?.description}</p>
							<h3>Entire home hosted by: {spot?.host.username}</h3>
							<p>
								{spot?.bedrooms} bedrooms <span>&#183;</span> {spot?.bathrooms}{" "}
								bathrooms
							</p>
							<div>Price per day: ${spot?.price_per_day}</div>
						</div>
						<div className="divisionRight">
							<Calendar />
						</div>
					</div>
				</div>
				<AmenitiesCard />
				<GetReviews />
				{disable && <ReviewForm />}
			</div>
		);
	}
};

export default SingleSpot;
