import MovieActionType from './../../actions/movie-actions/movie-actions.js';
import {adaptMovies, adaptMovie} from './../../utils/adapter.js';

const initialState = {
  movieCards: [],
  promoCard: {}
};

const ActionCreator = {
  setMovies: (movies) => ({
    type: MovieActionType.SET_MOVIES,
    payload: movies
  }),
  assignPromoCard: (card) => ({
    type: MovieActionType.ASSIGN_PROMO_CARD,
    payload: adaptMovie(card)
  }),
  replaceCard: (card) => ({
    type: MovieActionType.REPLACE_CARD,
    payload: card
  })
};

const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setMovies(adaptMovies(response.data)));
      });
  },
  loadPromoMovie: () => (dispatch, _, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.assignPromoCard(adaptMovie(response.data)));
      });
  },
  addToFavorite: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status ? 0 : 1}`, {})
      .then((response) => {
        dispatch(ActionCreator.replaceCard(adaptMovie(response.data)));
      })
      .catch((err) => {
        throw new Error(`${err} on post get favorite card`);
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionType.SET_MOVIES: return Object.assign({}, state, {
      movieCards: action.payload
    });
    case MovieActionType.REPLACE_CARD: return Object.assign({}, state, {
      movieCards: [...state.movieCards.filter((card) => card.id !== action.payload.id), action.payload]
    });
    case MovieActionType.ASSIGN_PROMO_CARD: return Object.assign({}, state, {
      promoCard: action.payload
    });
  }

  return state;
};


export {Operation as MoviesOperation, ActionCreator as MoviesActionCreator};
export default reducer;
