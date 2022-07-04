const LOAD = '/maps/LOAD';

// ACTION CREATORS
const load = key => {
  console.log(key, "Key in Load <---------")
  return ({
    type: LOAD,
    key,
  })

};

// "THUNK" ACTIONS CREATORS
export const getGMapKey = () => async (dispatch) => {
  const res = await fetch('/api/maps', {
    method: 'POST',
  });
  const data = await res.json();
  dispatch(load(data.googleAPIKey));
};

// REDUCER
const mapsReducer = (state = { key: null }, action) => {
  switch (action.type) {
    case LOAD:
      return { googleAPIKey: action.key };
    default:
      return state;
  }
};

export default mapsReducer;
