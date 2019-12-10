import {createSelector} from 'reselect';
import NameSpace from "../reducers/name-spaces";

import {DEFAULT_GENRE, MAX_RELATED_CARDS_COUNT} from '../constants/constants.js';

const getMovieCards = (state) => state[NameSpace.MOVIES].movieCards;
const getGenre = (state) => state[NameSpace.GENRE].genre;
const getActiveCard = (state) => state[NameSpace.ACTIVE_CARD].activeCard;
const getDisplayCount = (state) => state[NameSpace.DISPLAY_COUNT].displayCount;
const getUserData = (state) => state[NameSpace.AUTH].userData;
const getAuthRequiredStatus = (state) => state[NameSpace.AUTH].isAuthorizationRequired;

const getAuthStatus = createSelector(
    [getUserData],
    (userData) => Object.keys(userData).length > 0
);

const getActiveGenreCards = createSelector(
    [getMovieCards, getGenre],
    (movies, genre) => movies
    .filter((movie) => movie.genre === genre || genre === DEFAULT_GENRE)
);

const getRelatedMovies = createSelector(
    [getActiveGenreCards],
    (activeMovies) => activeMovies.slice(0, MAX_RELATED_CARDS_COUNT)
);

const getGenresList = createSelector(
    [getMovieCards],
    (movies) => [DEFAULT_GENRE, ...new Set(movies.map((movie) => movie.genre))]
);

const getCatalogCards = createSelector(
    [getMovieCards, getGenre, getDisplayCount],
    (movies, genre, count) => movies
    .filter((movie) => movie.genre === genre || genre === DEFAULT_GENRE)
    .slice(0, count)
);

const Selectors = {
  getGenre,
  getMovieCards,
  getActiveCard,
  getUserData,
  getAuthRequiredStatus,
  getDisplayCount,
  getAuthStatus,
  getRelatedMovies,
  getGenresList,
  getCatalogCards,
  getActiveGenreCards
};

export default Selectors;

