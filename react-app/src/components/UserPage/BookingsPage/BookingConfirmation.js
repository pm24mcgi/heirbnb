import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { format } from "date-fns";

const BookingConfirmation = () => {
    const { bookingId } = useParams();
    const booking = useSelector(state => state.booking[bookingId]);
    const user = useSelector(state => state.session.user);

    const start = new Date(booking.start_date)
    const startNew = start.getTime()
    const end = new Date(booking.end_date)
    const endNew = end.getTime()
    const timeSpan = endNew - startNew;
    const numOfDays = timeSpan / (1000 * 60 * 60 * 24)

    const checkIn = format(start, "MMMM do, yyyy");
    const checkOut = format(end, "MMMM do, yyyy");

    return (
        <div className='booking_container'>
            <h1 className='booking-blurb'>
                Your reservation was a success, {user.username}!
                <br />
                We hope you enjoy your stay!
            </h1>
            <img src={booking.spot.images[0].url} />
            <div className='booking-details'>
                <h3>Check-in: {checkIn}</h3>
                <h3>Check-out: {checkOut}</h3>
                <h3>Address: {booking.spot.address}</h3>
                <h3>Total: ${numOfDays * booking.spot.price_per_day}</h3>
            </div>
        </div>
    )
}

export default BookingConfirmation
