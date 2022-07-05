import { useEffect, useState, useRef } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Calendar.css';


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { createBooking } from '../../../store/bookings';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { GiConsoleController } from 'react-icons/gi';
import { authenticate } from '../../../store/session';
import BookingConfirmationModal from './BookingConfirmationModal';
import { Modal } from '../../../context/Modal';


const Calendar = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const spot = useSelector(state => state.spot[spotId]);
    const user = useSelector(state => state.session.user);
    const [modal, setModal] = useState(false)
    const [booked, setBooked] = useState("")


    // if no user, go home
    useEffect(() => {
        if (!user) history.push('/');
    }, [history, user])

    const bookings = useSelector(state => state.booking);
    const bookingsArr = Object.values(bookings);

    const spotBookings = bookingsArr.filter(booking => {
        return Number(booking.spot_id) === Number(spotId)
    })

    // disabled date
    function getDatesInRange(start_date, end_date) {
        let date = new Date(start_date.getTime());

        const dates = [];

        while (date <= end_date) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return dates;
    }

    function bookingDates(bookingsArr) {
        const dates = [];

        for (let i = 0; i < bookingsArr.length; i++) {
            let booking = bookingsArr[i];
            dates.push(...getDatesInRange(new Date(booking.start_date), new Date(booking.end_date)))
        }

        return dates;
    }

    const dates = bookingDates(spotBookings)

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection'
        }
    ]);

    const today = new Date();
    const start = new Date(range[0].startDate)
    const startNew = start.getTime()
    const end = new Date(range[0].endDate)
    const endNew = end.getTime()
    const timeSpan = endNew - startNew;
    const numOfDays = timeSpan / (1000 * 60 * 60 * 24)


    // open/close
    const [open, setOpen] = useState(false);

    // get the target element to toggle
    const refOne = useRef(null);

    // set current date on component load
    useEffect(() => {
        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        if (e.key === 'Escape') {
            setOpen(false)
        }
    }

    // hide dropdown on click outside
    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    // sumbitting the booking
    const handleSubmit = async (e) => {
        const start = range[0].startDate.getFullYear() + "-" + (range[0].startDate.getMonth() + 1) + "-" + range[0].startDate.getDate()
        const end = range[0].endDate.getFullYear() + "-" + (range[0].endDate.getMonth() + 1) + "-" + range[0].endDate.getDate()
        e.preventDefault();

        if (start === end) {
            return alert('We only accept reservations of two or more days. Please select again.')
        }
        const newBooking = {
            userId: user.id,
            spot_id: spotId,
            start_date: start,
            end_date: end
        };
        const booking = await dispatch(createBooking(newBooking))
        setBooked(booking)
        // await dispatch(authenticate())
        setModal(true)
    }


    return (
        <div className={open ? 'calendarWrapOpen' : 'calendarWrapClosed'}>
            <div ref={refOne}>
                {open &&
                    <div className='pickerWrap'>
                        <DateRange
                            className='picker'
                            onChange={item => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={2}
                            direction="horizontal"
                            disabledDates={dates}
                            minDate={today}
                            showPreview={false}
                        />
                        <br />
                        <button className='bookButton' onClick={handleSubmit} type='submit'>BOOK</button>
                        <button className='closeButton' onClick={() => setOpen(open => !open)}>CLOSE</button>
                    </div>
                }
            </div>
            <div className='detailsAndButton'>
                <div className='textAndInput'>
                    <p onClick={() => setOpen(open => !open)} className='inputBox'>Select Trip Dates ➡️</p>
                </div>
                <h4 className='total'>Total: ${spot?.price_per_day * numOfDays}</h4>


            </div>
            {modal &&
                <Modal onClose={() => setModal(false)}>
                    <BookingConfirmationModal setModal={setModal} booking={booked} />
                </Modal>
            }
        </div>
    )
};

export default Calendar;
