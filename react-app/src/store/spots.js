const GET_ALL_SPOTS = "/spots/getAllSpots";

const loadSpots = (spots) => ({
	type: GET_ALL_SPOTS,
	spots,
});

export const getSpots = () => async (dispatch) => {
	const response = await fetch("/api/spots");

	if (response.ok) {
		const spotList = await response.json();
		dispatch(loadSpots(spotList));
		return spotList;
	}
};

const spotsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_SPOTS:
			const allSpots = action.spots;
			return {...allSpots};
		default:
			return state;
	}
};

export default spotsReducer;
