import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

function SearchBar() {
	const spots = Object.values(useSelector((state) => state.spot));
	const bookings = Object.values(useSelector((state) => state.booking));

	const STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
		'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
		'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
		'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
		'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
		'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
	];

	const [guests, setGuests] = useState(1);
	const [date, setDate] = useState("");
	const [state, setState] = useState("AL");


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
			dates.push(
				...getDatesInRange(
					new Date(booking.start_date),
					new Date(booking.end_date)
				)
			);
		}

		return dates;
	}

	const bookedDates = bookingDates(bookings);

	const isAvailable = (bookedDates, dateInput) => {
		let isAvailable = false;
		for (const book of bookedDates) {
			if (book != dateInput) {
				isAvailable = true;
			} else {
				isAvailable = false;
			}
		}
		return isAvailable;
	};

	const filterSpotGuests = (guests, date, state) => {
		const filteredSpots = spots.filter((spot) => {
			let available = isAvailable(bookedDates, date)
			return spot.bedrooms*2 < guests && spot.state === state && available;
		});
	};

	return (
		<div className="search-bar-container">
			<div className="search-clicker-container">
				<label htmlFor="state">State</label>
				<select
					required
					name="state"
					onChange={(e) => setState(e.target.value)}
					value={state}
				>
					<option disabled>Select a State</option>
					{STATES.map((state) => (
						<option value={state}>{state}</option>
					))}
				</select>
			</div>
			<div className="search-divider"></div>
			<div className="search-clicker-container">
				<input
					name="date"
					type="date"
					placeholder="Any week"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</div>
			<div className="search-divider"></div>
			<div className="search-clicker-container">
			<label htmlFor="guests">Guests</label>
				<select
					required
					name="guests"
					onChange={(e) => setGuests(parseInt(e.target.value))}
					value={guests}
				>
					<option disabled >Select # of guests</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10+</option>
				</select>
			</div>
			<div className="search-btn">
				<BiSearchAlt onClick={() => filterSpotGuests(guests,date, state)} />{" "}
			</div>
		</div>
	);
}

export default SearchBar;
