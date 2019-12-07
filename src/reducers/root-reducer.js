import {combineReducers} from 'redux';

import NameSpace from './name-spaces.js';
import moviesReducer from './movies-reducer/movies-reducer.js';
import genreReducer from './genre-reducer/genre-reducer.js';
import activeCardReducer from './active-card-reducer/active-card-reducer.js';

const rootReducer = combineReducers({
  [NameSpace.MOVIES]: moviesReducer,
  [NameSpace.GENRE]: genreReducer,
  [NameSpace.ACTIVE_CARD]: activeCardReducer
});

export default rootReducer;
