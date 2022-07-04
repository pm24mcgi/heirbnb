import { useSelector } from "react-redux";


function BookingCard({booking}){
  const {spot_id, user, end_date, start_date } = booking;
  const spot = useSelector(state => state.spot[spot_id])
  console.log(end_date)

  return (
    <div className="booking-card">
      <img src={spot.images[0].url} alt="booking card"></img>

    </div>

  )
}

export default BookingCard;
