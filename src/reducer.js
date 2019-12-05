import {adapterMovie, adapterMovies} from './utils/adapter.js';

const initialState = {
  activeCard: null,
  movieCards: [],
  genre: null,
  catalogMaxCards: 0
};

const ActionType = {
  ASSIGN_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`
};

const ActionCreator = {
  assignActiveCard: (card) => ({
    type: ActionType.ASSIGN_ACTIVE_CARD,
    payload: card
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie
  })
};

const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(adapterMovies(response.data)));
      });
  },
  loadPromoMovie: () => (dispatch, _, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(adapterMovie(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ASSIGN_ACTIVE_CARD: return Object.assign({}, state, {
      activeCard: action.payload
    });
    case ActionType.LOAD_MOVIES: return Object.assign({}, state, {
      movieCards: action.payload
    });
    case ActionType.LOAD_PROMO_MOVIE: return Object.assign({}, state, {
      currentVideoID: action.payload.id
    });
  }

  return state;
};

export {
  initialState,
  ActionType,
  ActionCreator,
  reducer,
  Operation
};
