import ReviewsActionType from '../../actions/reviews-actions/reviews-actions.js';

const initialState = {
  reviews: []
};

const ActionCreator = {
  setReviews: (reviews) => ({
    type: ReviewsActionType.SET_REVIEWS,
    payload: reviews
  })
};

const Operation = {
  postReview: (review, id) => (dispatch, _, api) => {
    return api.post(`/comments/${id}`, review)
      .then((response) => {
        dispatch(ActionCreator.setReviews(response.data));
        return response;
      })
      .catch((err) => {
        throw new Error(`${err} on post review`);
      });
  },
  loadReviews: (id) => (dispatch, _, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.setReviews(response.data));
        return response.data;
      })
      .catch((err) => {
        throw new Error(`${err} on load reviews`);
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ReviewsActionType.SET_REVIEWS: return Object.assign({}, state, {
      reviews: action.payload
    });
  }

  return state;
};

export {ActionCreator as ReviewsActionCreator, Operation as ReviewsOperation, initialState as ReviewsInitialState};
export default reducer;
