import {movieCards as mockMovieCards} from "./mocks/films";

const initialState = {
  genre: `All genres`,
  movieCards: mockMovieCards,
  currentVideoID: 21
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_CURRENT_VIDEO_ID: `CHANGE_CURRENT_VIDEO_ID`,
};

const ActionCreator = {
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };
  },
  changeCurrentVideoID: (id) => ({
    type: ActionType.CHANGE_CURRENT_VIDEO_ID,
    payload: id
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {
      genre: action.payload
    });
    case ActionType.CHANGE_CURRENT_VIDEO_ID: return Object.assign({}, state, {
      currentVideoID: action.payload
    });
  }

  return state;
};

export {
  initialState,
  ActionType,
  ActionCreator,
  reducer
};
