import React from 'react'
import format from 'date-fns/format';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import { deleteBooking, getBookings } from '../../../store/bookings';

const BookingDetail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bookingId } = useParams();
    const booking = useSelector(state => state.booking[bookingId]);
    const images = booking.spot.images;
    const start = new Date(booking.start_date)
    const startNew = start.getTime()
    const end = new Date(booking.end_date)
    const endNew = end.getTime()
    const timeSpan = endNew - startNew;
    const numOfDays = timeSpan / (1000 * 60 * 60 * 24)
    // const images = useSelector(state => state.booking[bookingId].spot.images);
    // const imagesArr = Object.values(images)
    console.log(images)

    const deleteHandler = (e, booking) => {
        e.preventDefault()
        dispatch(deleteBooking(booking)).then(() => dispatch(getBookings()))
            .then(() => history.push(`/profile/bookings`))
    }

    return (
        <div>
            <h1>Upcoming Trip</h1>
            {images.map(image => {
                return (
                    <img key={image.id} src={image.url} />
                )
            })}
            <h4>{booking.spot.title}</h4>
            <p>Check-in: {format((new Date(booking.start_date)), 'MMMM do, yyyy')}</p>
            <p>Check-out: {format((new Date(booking.end_date)), 'MMMM do, yyyy')}</p>
            <p>Address: {booking.spot.address}</p>
            <p>Total: ${numOfDays * booking.spot.price_per_day}</p>
            <h4>Contact the host</h4>
            <p>Host: {booking.spot.host.username}</p>
            <p>Email: {booking.spot.host.email}</p>
            <button onClick={(e) => deleteHandler(e, booking)}>Cancel Trip</button>
        </div>
    )
}

export default BookingDetail


// images
// check-in
// check-out
// address
// host username/email
// total
