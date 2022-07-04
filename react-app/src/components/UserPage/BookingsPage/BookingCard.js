import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Modal } from "../../../context/Modal";

import BookingModal from "./BookingModal";


function BookingCard({ booking }) {
  const [modal, setModal] = useState(false)

  const { spot_id, end_date, start_date } = booking;
  const spot = useSelector(state => state.spot[spot_id])
  const { city, state, title, host } = spot;

  useEffect(()=>{
    let modalDiv= document.body.getElementsByClassName("booking-modal")[0]
    document.body.style.overflowY = modal ? "hidden" : "scroll";
    if(modalDiv){

      modalDiv.style.overflowY = modal ? "scroll" : "hidden";
    }


  }, [modal])
  return (
    <>
      <div className="booking-card" onClick={() => setModal(true)}>
        <img src={spot.images[0].url} alt="booking card"></img>
        <div className="booking-card-info">
          <h3 className="title">{title}</h3>
          <p>{city}, {state}</p>
          <p>From {start_date.slice(0, 16)} to {end_date.slice(0, 16)}</p>
          <p className="bold">Hosted by {host.first_name ? `${host.first_name} ${host.last_name}` : host.username} </p>
        </div>
      </div>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <BookingModal setModal={setModal}  booking={booking} spot={spot}/>
        </Modal>
      )}
    </>


  )
}

export default BookingCard;
