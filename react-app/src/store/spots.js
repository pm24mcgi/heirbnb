const GET_ALL_SPOTS = "/spots/getAllSpots";

const loadSpots = (spots) => ({
	type: GET_ALL_SPOTS,
	spots
});

export const getSpots = () => async (dispatch) => {
	const response = await fetch("/api/spots");
	console.log(response);

	if (response.ok) {
		const spotList = await response.json();
		console.log(spotList);
		dispatch(loadSpots(spotList));
		return spotList;
	}
};

const spotsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_SPOTS:
            const allSpots = action.spots;
            return allSpots;
			// const newState = {};
			// action.spots.forEach((spots) => (newState[spots.id] = spots));
			// return newState;
		default:
			return state;
	}
};

export default spotsReducer;
