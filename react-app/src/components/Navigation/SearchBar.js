import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

function SearchBar({spots, setFiltered}) {
	const history = useHistory();
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
	const [state, setState] = useState("Anywhere");


	function getDatesInRange(start_date, end_date) {
		let date = new Date(start_date.getTime());

		const dates = [];

		while (date <= end_date) {
			dates.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}

		return dates;
	}

	function bookingDates(bookingsId) {
		const dates = [];

		for (let i = 0; i < bookingsId.length; i++) {
			let booking = bookings[i];
			dates.push(
				...getDatesInRange(
					new Date(booking.start_date),
					new Date(booking.end_date)
				)
			);
		}
		return dates;
	}


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
		let available = true;
		const  filteredSpots = spots.filter((spot) => {
			let bookedDates = bookingDates(spot.bookings);
			if(date){
				 available = isAvailable(bookedDates, date);
			}

			if(state === "Anywhere" ){
				return spot.bedrooms*2 > guests && available;
			}

			return spot.bedrooms*3 > guests && spot.state === state && available;
		});
		history.push('/query');
		return filteredSpots;
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
					<option>Anywhere</option>
					{STATES.map((state) => (
						<option value={state} key={state}>{state}</option>
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
				<BiSearchAlt onClick={() => setFiltered(filterSpotGuests(guests,date, state))} />{" "}
			</div>
		</div>
	);
}

export default SearchBar;
