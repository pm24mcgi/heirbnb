import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function BookingCard({ booking }) {
  const { spot_id, end_date, start_date, id } = booking;
  const spot = useSelector(state => state.spot[spot_id])
  const {city, state, title, bedrooms, bathrooms, host} = spot;

  return (
    <Link to={`/bookings/${id}`}>
      <div className="booking-card">
        <img src={spot.images[0].url} alt="booking card"></img>
        <div className="booking-card-info">
          <h3 class="title">{title}</h3>
          <p>{city}, {state}</p>
          <p>From {start_date.slice(0, 16)} to {end_date.slice(0, 16)}</p>
          <p class="bold">Hosted by {host.first_name ? `${host.first_name} ${host.last_name}` : host.username} </p>
        </div>

      </div>
    </Link>

  )
}

export default BookingCard;
