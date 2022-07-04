const GET_ALL_SPOTS = "/spots/getAllSpots";
const GET_SPOT = "/spots/getSpot";
const CREATE_SPOT = "/spots/create";
const EDIT_SPOT = "/spots/edit";
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

export const getSpot = (id) => async (dispatch) => {
	const response = await fetch(`/api/spots/${id}`);

	if (response.ok) {
		const spot = await response.json();
		dispatch(loadSpot(spot));
		return spot;
	}
};

export const addSpot = (data) => async (dispatch) => {
	const response = await fetch("/api/spots/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createSpot(data));

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

export const modifySpot = (data) => async (dispatch) => {
	const response = await fetch(`/api/spots/${data.spotId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(editSpot(data));
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
	const response = await fetch(`/api/spots/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(deleteSpot(id));
	}
};

//AWS upload images
export const uploadImage = (imageData) => async dispatch => {
	const { url, spot_id, image } = imageData;

	const formData = new FormData();
	formData.append("url", url);
	formData.append("spot_id", spot_id);
	formData.append("image", image);

	const res = await fetch('/api/images/upload', {
		method: "POST",
		body: formData,
	});

	if (res.ok) {
		return await res.json();
	}

}

const spotsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_SPOTS:
			const allSpots = action.spots;
			return allSpots;
		case GET_SPOT:
			const singleSpot = action.spot;
			return singleSpot;
		case CREATE_SPOT:
			return { ...state, [action.spot.id]: action.spot };
		case EDIT_SPOT:
			return { ...state, [action.spot.id]: action.spot };
		case DELETE_SPOT:
			const newState = { ...state };
			delete newState[action.spot.id];
			return newState;
		default:
			return state;
	}
};

export default spotsReducer;
