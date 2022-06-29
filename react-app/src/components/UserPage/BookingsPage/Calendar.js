import { useEffect, useState, useRef } from 'react';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';


const Calendar = () => {

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
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

    return (
        <div className='calendarWrap'>CHECK-IN/CHECK-OUT
            <input
                value={` ${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")} `}
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
