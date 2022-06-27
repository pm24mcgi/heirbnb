const LOAD = '/reviews/LOAD';
const CREATE = '/reviews/CREATE';
// const REMOVE = '/reviews/REMOVE';
// const EDIT = '/reviews/EDIT';

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

const create = review => ({
  type: CREATE,
  review
});

// const remove = review => ({
//   type: REMOVE,
//   review
// })

// const edit = review => ({
//   type: EDIT,
//   review
// });

// "THUNK" ACTIONS CREATORS
export const getReviews = () => async dispatch => {
  const response = await fetch(`/api/reviews`);

  if (response.ok) {
    const reviewList = await response.json();
    dispatch(load(reviewList));
    return reviewList;
  };
};

export const postReview = (payload, spot_id) => async dispatch => {
  const response = await fetch(`/api/reviews/${spot_id}/new`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(create(review));
    return review;
  };
}

// REDUCER
const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allReviews = action.list;
      return allReviews;
    case CREATE:
      return action.review;
    default:
      return state;
  }
}

  export default reviewReducer;
