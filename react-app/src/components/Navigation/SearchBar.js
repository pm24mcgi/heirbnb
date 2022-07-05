import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

function SearchBar({ spots, setFiltered }) {
	const history = useHistory();

	const STATES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
		'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
		'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
		'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
		'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
		'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
	];

	const [guests, setGuests] = useState(1);
	const [state, setState] = useState("Anywhere");

	const filterSpotGuests = (guests, state) => {
		let available = true;
		const filteredSpots = spots.filter((spot) => {
			if (state === "Anywhere") {
				return spot.bedrooms * 2 > guests && available;
			}

			return spot.bedrooms * 3 > guests && spot.state === state;
		});
		history.push("/query");
		return filteredSpots;
	};

	return (
		<div className="search-bar-container">
			<div >
				{/* <label htmlFor="state">State</label> */}
				<select
					className="search-clicker-container"
					required
					name="state"
					onChange={(e) => setState(e.target.value)}
					value={state}
				>
					<option disabled>Select a State</option>
					<option>Anywhere</option>
					{STATES.map((state) => (
						<option value={state} key={state}>
							{state}
						</option>
					))}
				</select>
			</div>
			{/* <div className="search-divider"></div> */}
			<div >
				{/* <label htmlFor="guests">Guests</label> */}
				<select
					className="search-clicker-container"
					required
					name="guests"
					onChange={(e) => setGuests(parseInt(e.target.value))}
					value={guests}
				>
					<option disabled>Select # of guests</option>
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
				<BiSearchAlt
					onClick={() => setFiltered(filterSpotGuests(guests, state))}
				/>{" "}
			</div>
		</div>
	);
}

export default SearchBar;
