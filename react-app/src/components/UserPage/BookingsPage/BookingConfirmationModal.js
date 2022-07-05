import {useEffect} from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";

const BookingConfirmationModal = ({booking}) => {
	const history = useHistory()
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
      history.push('/profile');
    }, 3000)
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
					<h3>Check-in: {checkIn}</h3>
					<h3>Check-out: {checkOut}</h3>
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
