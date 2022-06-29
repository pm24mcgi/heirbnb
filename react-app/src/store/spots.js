const GET_ALL_SPOTS = "/spots/getAllSpots";
const GET_SPOT = "/spots/getSpot";
const CREATE_SPOT = "/spots/create";
const EDIT_SPOT = "/spots/create";
const DELETE_SPOT = "/spots/delete";

const loadSpots = (spots) => ({
	type: GET_ALL_SPOTS,
	spots,
});

const loadSpot = (spot) => ({
	type: GET_SPOT,
	spot,
});


const createSpot = (spot) => ({
	type: CREATE_SPOT,
	spot,
});

const editSpot = (spot) => ({
	type: EDIT_SPOT,
	spot,
});

const deleteSpot = (spot) => ({
	type: DELETE_SPOT,
	spot
});

export const getSpots = () => async (dispatch) => {
	const response = await fetch("/api/spots");

	if (response.ok) {
		const spotList = await response.json();
		dispatch(loadSpots(spotList));
		return spotList;
	}
};

export const getSpot = (id) => async (dispatch) => {
	const response = await fetch(`/api/spots/${id}`);

	if (response.ok) {
		const spot = await response.json();
		dispatch(loadSpot(spot));
		return spot;
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

export const modifySpot =
	(
		id,
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
		const response = await fetch(`/api/spots/${id}`, {
			method: "PUT",
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
			dispatch(editSpot(data));
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

export const eraseSpot = (id) => async (dispatch) => {
	console.log('THIS is the ID', id)
	const response = await fetch(`/api/spots/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log("delete response",response)

	if (response.ok) {
		dispatch(deleteSpot(id));
	}
};

const spotsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_SPOTS:
			const allSpots = action.spots;
			return { ...allSpots };
		case GET_SPOT:
			const singleSpot = action.spot;
			return singleSpot;
		case CREATE_SPOT:
			const spot = action.spot;
			return spot;
		case EDIT_SPOT:
			const modifySpot = action.spot;
			return modifySpot;
		case DELETE_SPOT:
			const newState = { ...state };
			delete newState[action.spot.id];
			return newState;
		default:
			return state;
	}
};

export default spotsReducer;
