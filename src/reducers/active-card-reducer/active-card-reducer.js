import ActiveCardActionType from './../../actions/active-card-actions/active-card-actions.js';
import {adaptMovie} from './../../utils/adapter.js';

const initialState = {
  activeCard: {}
};

const ActionCreator = {
  assignActiveCard: (card) => ({
    type: ActiveCardActionType.ASSIGN_ACTIVE_CARD,
    payload: card
  }),
  loadPromoMovie: (movie) => ({
    type: ActiveCardActionType.LOAD_PROMO_MOVIE,
    payload: movie
  })
};

const Operation = {
  loadPromoMovie: () => (dispatch, _, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(adaptMovie(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActiveCardActionType.ASSIGN_ACTIVE_CARD: return Object.assign({}, state, {
      activeCard: action.payload
    });
    case ActiveCardActionType.LOAD_PROMO_MOVIE: return Object.assign({}, state, {
      activeCard: action.payload
    });
  }

  return state;
};


export {Operation as ActiveCardOperation, ActionCreator as ActiveCardActionCreator};
export default reducer;
