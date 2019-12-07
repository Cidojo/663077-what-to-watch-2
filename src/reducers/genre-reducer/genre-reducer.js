import GenreActionType from './../../actions/genre-actions/genre-actions.js';

const initialState = {
  genre: `All genres`
};

const ActionCreator = {
  assignGenre: (genre) => ({
    type: GenreActionType.ASSIGN_GENRE,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GenreActionType.ASSIGN_GENRE: return Object.assign({}, state, {
      genre: action.payload
    });
  }

  return state;
};

export {ActionCreator as GenreActionCreator};
export default reducer;
