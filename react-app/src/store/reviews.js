const LOAD = '/reviews/LOAD';
const CREATE = '/reviews/CREATE';
const REMOVE = '/reviews/REMOVE';
const EDIT = '/reviews/EDIT';

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

const create = review => ({
  type: CREATE,
  review
});

const remove = review => ({
  type: REMOVE,
  review
})

const edit = review => ({
  type: EDIT,
  review
});

//edit

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
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(create(review));
    return review;
  };
}

export const deleteReview = (review_id) => async dispatch => {
  const response = await fetch(`/api/reviews/${review_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review_id)
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(remove(review));
  };
};

export const editReview = (payload, review_id) => async dispatch => {
  const response = await fetch(`/api/reviews/${review_id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const review = await response.json()
  if (review) {
    dispatch(edit(review));
  };
  return review;
};

// REDUCER
const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allReviews = action.list;
      return allReviews;
    case CREATE:
      return { ...state, [action.review.id]: action.review };
    case REMOVE:
      const deleteState = { ...state };
      delete deleteState[action.review.id];
      return deleteState;
    case EDIT:
      return { ...state, [action.review.id]: action.review };
    default:
      return state;
  }
}

export default reviewReducer;
