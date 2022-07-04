import React from 'react'
import format from 'date-fns/format';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import { deleteBooking, getBookings } from '../../../store/bookings';
import "./BookingDetail.css"

const BookingDetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bookingId } = useParams();
    const booking = useSelector(state => state.booking[bookingId]);
    const spot = useSelector(state => state.spot[booking.spot_id])
    const image = spot.images[0];
    const start = new Date(booking?.start_date)
    const startNew = start.getTime()
    const end = new Date(booking?.end_date)
    const endNew = end.getTime()
    const timeSpan = endNew - startNew;
    const numOfDays = timeSpan / (1000 * 60 * 60 * 24)

    const deleteHandler = (e, bookingId) => {
        e.preventDefault()
        dispatch(deleteBooking(bookingId))
        history.push(`/profile/bookings`)
    }

    return (
        <div>
            <h1>Upcoming Trip</h1>
            <img className='booking-image' src={image?.url} alt="home" />
            <h4>{spot.title}</h4>
            <p>Check-in: {format((start), 'MMMM do, yyyy')}</p>
            <p>Check-out: {format((end), 'MMMM do, yyyy')}</p>
            <p>Address: {spot.address}</p>
            <p>Total: ${numOfDays * spot.price_per_day}</p>
            <h4>Contact the host</h4>
            <p>Host: {spot.host.username}</p>
            <p>Email: {spot.host.email}</p>
            <button onClick={(e) => deleteHandler(e, bookingId)}>Cancel Trip</button>
        </div>
    )
}

export default BookingDetail
