import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Calendar from "../../UserPage/BookingsPage/Calendar";
import GetReviews from "../../Reviews/getReviews";
import ReviewForm from "../../Reviews/postReviews";
import DeleteSpot from "./DeleteSpot";
import AmenitiesCard from "./AmenitiesCard.js";
import PageNotFound from "../../PageNotFound";
import { getSpots } from "../../../store/spots";

import "./SingleSpot.css";

const SingleSpot = ({ setLoaded, loaded }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { spotId } = useParams();
	const [disable, setDisable] = useState(true);
	const spot = useSelector((state) => state?.spot[spotId]);
	const user = useSelector((state) => state?.session.user);

	const reviewsArr = spot?.reviews;
	const imagesArr = spot?.images;

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
		dispatch(getSpots())
		setDisable(disableHandler(reviewsArr, user.id));
	}, [reviewsArr, user.id, disable]);

	if (!spot && loaded) {
		return <PageNotFound />;
	}
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
						{spot?.host.id == user?.id && (
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
					{imagesArr?.map((image, i) => {
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

export default SingleSpot;
