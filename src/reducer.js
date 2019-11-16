import {movieCards as mockMovieCards} from "./mocks/films";

const initialState = {
  allMovies: mockMovieCards,
  genre: `All Genres`,
  movieCards: mockMovieCards
};

const getMoviesByGenre = (genre, allMovies = initialState.allMovies, initialGenre = initialState.genre) => {
  if (genre === initialGenre) {
    return allMovies;
  }

  return allMovies.filter((card) => {
    return card.genre.toLowerCase() === genre.toLowerCase();
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `FILTER_BY_GENRE`: return Object.assign({}, state, {
      movieCards: getMoviesByGenre(action.payload, state.allMovies),
      genre: action.payload
    });
  }

  return state;
};

export {reducer, initialState};
