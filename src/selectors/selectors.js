import {createSelector} from 'reselect';
import NameSpace from "../reducers/name-spaces";

const getMovieCards = (state) => state[NameSpace.MOVIES].movieCards;
const getGenre = (state) => state[NameSpace.GENRE].genre;
const getActiveCard = (state) => state[NameSpace.ACTIVE_CARD].activeCard;

const getRelatedMovies = (movies, genre) => movies.filter((movie) => movie.genre === genre || genre === `All genres`);
const getGenresList = (movies) => [...new Set(movies.map((movie) => movie.genre))];

const Selectors = {
  getGenre,
  getMovieCards,
  getActiveCard,
  getRelatedMovies,
  getGenresList
};

export default Selectors;

