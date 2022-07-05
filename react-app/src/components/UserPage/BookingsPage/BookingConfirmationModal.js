import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";

import { authenticate } from "../../../store/session";

const BookingConfirmationModal = ({ booking, setModal }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const spot = useSelector((state) => state.spot[booking?.spot_id]);
	const user = useSelector((state) => state.session.user);

	const start = new Date(booking?.start_date);
	const startNew = start.getTime();
	const end = new Date(booking?.end_date);
	const endNew = end.getTime();
	const timeSpan = endNew - startNew;
	const numOfDays = timeSpan / (1000 * 60 * 60 * 24);

	const checkIn = format(start, "MMMM do, yyyy");
	const checkOut = format(end, "MMMM do, yyyy");

	useEffect(() => {
		setTimeout(() => {
			dispatch(authenticate())
			setModal(false)
		}, 6000)
	}, [])

	return (
		<div className="bookingContainer">
			<h2 className="booking-blurb">
				Your reservation was a success, {user?.username}!
				<br />
				We hope you enjoy your stay!
			</h2>

			<img
				className="spot-image"
				src={spot.images[0].url}
				alt={`${spot.images[0].id}`}
			/>
			<div className="booking-details">
				<div className='booking-details-dates'>
					<h3>Check-in: {booking.start_date.slice(0, 16)}</h3>
					<h3>Check-out: {booking.end_date.slice(0, 16)}</h3>
				</div>
				<h3>
					Address: #{spot?.address}, {spot?.city}, {spot?.state}
				</h3>
				<h3>Total: ${numOfDays * spot?.price_per_day}</h3>
			</div>
		</div>
	);
};

export default BookingConfirmationModal;
