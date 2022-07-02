import React from 'react'
import { useSelector } from 'react-redux'
import format from 'date-fns/format';
import { Link } from 'react-router-dom';


function ProfileBookings() {
  const bookings = useSelector(state => state.booking)
  const user = useSelector(state => state.session.user)

  const bookingsArr = Object.values(bookings)
  const userBookings = bookingsArr.filter(booking => {
    return Number(booking.user.id) === Number(user.id)
  })
  console.log(userBookings)

  return (
    <div>
      <h1>Upcoming Trips</h1>
      {userBookings.map(booking => {
        return (
          <Link className='booking-link' to={`/bookings/${booking.id}`}>
            <div>
              <img src={booking.spot.images[0].url} />
              <h4>{booking.spot.title}</h4>
              <p>Check-in: {format((new Date(booking.start_date)), 'MMMM do, yyyy')}</p>
              <p>Check-out: {format((new Date(booking.end_date)), 'MMMM do, yyyy')}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProfileBookings;
