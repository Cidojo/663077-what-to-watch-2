import MovieActionType from './../../actions/movie-actions/movie-actions.js';
import {adaptMovies} from './../../utils/adapter.js';

const initialState = {
  movieCards: []
};

const ActionCreator = {
  loadMovies: (movies) => ({
    type: MovieActionType.LOAD_MOVIES,
    payload: movies
  })
};

const Operation = {
  loadMovies: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(adaptMovies(response.data)));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionType.LOAD_MOVIES: return Object.assign({}, state, {
      movieCards: action.payload
    });
  }

  return state;
};


export {Operation as MovieOperation, ActionCreator as MovieActionCreator};
export default reducer;
