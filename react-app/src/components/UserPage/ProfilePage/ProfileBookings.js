import React from 'react'
import { useSelector } from 'react-redux'
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import './ProfileBookings.css'


function ProfileBookings() {
  const bookings = useSelector(state => state.booking)
  const user = useSelector(state => state.session.user)
  const spots = useSelector(state => state.spot)

  const bookingsArr = Object.values(bookings)
  const userBookings = bookingsArr.filter(booking => {
    return Number(booking.user.id) === Number(user.id)
  })
  let spot;

  return (
    <div className='bookings-wrap'>
      <h1>Upcoming Trips</h1>
      {userBookings.map(booking => {
        spot = spots[booking.spot_id]
        return (
          <Link key={booking?.id} className='booking-link' to={`/bookings/${booking?.id}`}>
            <div>
              <img className='bookingImg' src={spot?.images[0].url} alt={spot?.images[0].url} />
              <h4>{spot?.title}</h4>
              <p>Check-in: {format((new Date(booking?.start_date)), 'MMMM do, yyyy')}</p>
              <p>Check-out: {format((new Date(booking?.end_date)), 'MMMM do, yyyy')}</p>

            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProfileBookings;
