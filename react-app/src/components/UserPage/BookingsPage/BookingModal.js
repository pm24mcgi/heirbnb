import React from 'react'
import format from 'date-fns/format';
import {GrClose} from 'react-icons/gr';

import { useDispatch } from 'react-redux';
import { deleteBooking } from '../../../store/bookings';

const BookingModal = ({ setModal, booking, spot }) => {
    const dispatch = useDispatch();
    const { start_date, end_date, id } = booking

    const image = spot.images[0];
    const start = new Date(start_date)
    const startNew = start.getTime()
    const end = new Date(end_date)
    const endNew = end.getTime()
    const timeSpan = endNew - startNew;
    const numOfDays = timeSpan / (1000 * 60 * 60 * 24)

    const deleteHandler = (e, bookingId) => {
        e.preventDefault()
        dispatch(deleteBooking(bookingId))
        setModal(false)
    }


    return (
        <div className="booking-modal">
            <GrClose className="cancel-icons" onClick={() => setModal(false)} />
            <h2>{spot.title}</h2>
            <img className='booking-image' src={image?.url} alt="home" />
            <h4>Booking Information:</h4>
            <div className='booking-section'>
                <p>Check-in: {start_date.slice(0, 16)}</p>
                <p>Check-out:{end_date.slice(0, 16)}</p>
                <p>Address: {spot.address}, {spot.city}, {spot.state}, {spot.zip_code}</p>
                <p>Total: ${numOfDays * spot.price_per_day}</p>
            </div>
            <h4>Contact the host:</h4>
            <div className='booking-section'>
                <p>Host: {spot.host.username}</p>
                <p>Email: {spot.host.email}</p>
            </div>
            <button onClick={(e) => deleteHandler(e, id)}>Cancel Trip</button>
        </div>
    )
}

export default BookingModal
