const GET_ALL_SPOTS = "/spots/getAllSpots";
const CREATE_SPOT = "/spots/create";

const loadSpots = (spots) => ({
	type: GET_ALL_SPOTS,
	spots,
});

const createSpot = (spot) => ({
	type: CREATE_SPOT,
	spot,
});

export const getSpots = () => async (dispatch) => {
	const response = await fetch("/api/spots");

	if (response.ok) {
		const spotList = await response.json();
		dispatch(loadSpots(spotList));
		return spotList;
	}
};

export const addSpot =
	(
		address,
		title,
		description,
		city,
		state,
		zip_code,
		lng,
		lat,
		bedrooms,
		bathrooms,
		sqFt,
		design_type,
		price_per_day
	) =>
	async (dispatch) => {
		const response = await fetch("/api/spots/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				address,
				title,
				description,
				city,
				state,
				zip_code,
				lng,
				lat,
				bedrooms,
				bathrooms,
				sqFt,
				design_type,
				price_per_day,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			dispatch(createSpot(data));
			console.log(data);
			
			return data;
		} else if (response.status < 500) {
			const data = await response.json();
			if (data.errors) {
				return data.errors;
			}
		} else {
			return ["An error occurred. Please try again."];
		}
	};

const spotsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_SPOTS:
			const allSpots = action.spots;
			return { ...allSpots };
		default:
			return state;
	}
};

export default spotsReducer;
