import { useEffect, useState, useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { getBookings } from '../../../store/bookings';


const Calendar = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot[spotId]);
    const bookings = useSelector(state => state.booking);
    const bookingsArr = Object.values(bookings);
    console.log(bookingsArr)

    // useEffect(() => {
    //     dispatch(getBookings());
    // }, [dispatch])

    // disabled date state
    const [disabled, setDisabled] = useState([])

    function getDatesInRange(start_date, end_date) {
        let date = new Date(start_date);
        date = date.getTime();

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
            dates.push(getDatesInRange(booking.start_date, booking.end_date))
        }

        return dates;
    }

    // if (bookingsArr) {
    //     const dates = bookingDates(bookingsArr);
    //     setDisabled(dates);
    // }


    // date state
    const [range, setRange] = useState([
        {
            start_date: new Date(),
            end_date: addDays(new Date(), 1),
            key: 'selection'
        }
    ]);

    // open/close
    const [open, setOpen] = useState(false);

    // get the target element to toggle
    const refOne = useRef(null);

    useEffect(() => {
        // set current date on component load
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
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const newBooking = {
    //         userId: user.id,
    //         spot_id: spotId,
    //         start_date:
    //     }
    // }

    return (
        <div className='calendarWrap'>CHECK-IN/CHECK-OUT
            <input
                value={` ${format(range[0].start_date, "MM/dd/yyyy")} to ${format(range[0].end_date, "MM/dd/yyyy")} `}
                readOnly
                className='inputBox'
                onClick={() => setOpen(open => !open)}
            />
            <button>BOOK</button>
            <div ref={refOne}>
                {open &&
                    <div>
                        <DateRangePicker
                            onChange={item => setRange([item.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={range}
                            direction="horizontal"
                        >
                        </DateRangePicker>
                        <br />
                        <button onClick={() => setOpen(open => !open)}>CLOSE</button>
                    </div>
                }
            </div>
        </div>
    )
};

export default Calendar;
