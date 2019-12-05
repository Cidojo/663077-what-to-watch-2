import {createSelector} from 'reselect';

const moviesSelector = (state) => state.movieCards;
const genreSelector = (state) => state.genre;

const filterByGenre = (movies, genre) => (
  genre === null ? movies :
    movies.filter((movie) => movie.genre === genre)
);

const getGenresList = (movies) => [...new Set(movies.map((movie) => movie.genre))];

const Selectors = {
  filterByGenre: createSelector(
      [moviesSelector, genreSelector],
      filterByGenre
  ),
  getGenresList: createSelector(moviesSelector, getGenresList),
};

export default Selectors;

