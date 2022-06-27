const LOAD = '/reviews/LOAD';
// const CREATE = '/reviews/CREATE';
// const REMOVE = '/reviews/REMOVE';
// const EDIT = '/reviews/EDIT';

// ACTION CREATORS
const load = reviews => ({
  type: LOAD,
  reviews
});

// const create = review => ({
//   type: CREATE,
//   review
// });

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
  console.log('--------did I hit this??????----------')
  const response = await fetch(`/api/reviews`);

  if (response.ok) {
    const reviewList = await response.json();
    dispatch(load(reviewList));
    return reviewList
  }
};

// REDUCER
const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allReviews = {};
      action.list.forEach(review => {
        allReviews[review.id] = review;
      });
      return allReviews
    default:
      return state;
  }
}

  export default reviewReducer;
