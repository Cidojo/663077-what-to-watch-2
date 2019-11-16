import * as React from 'react';
import * as ReactDom from 'react-dom';
import {App} from './components/app/app.jsx';

import {Genres as MockGenres, movieCards as mockMovieCards} from './mocks/films.js';

const settings = {
  defaultVideoID: 21,
  genres: MockGenres,
  movieCards: mockMovieCards,
  userData: {
    avatar: `img/avatar.jpg`
  },
  cardsPerPage: 20
};

const getCurrentMovieCard = (id, list) => {
  return list.find((card) => card.id === id);
};

const getMoviesLikeThis = (genre, list) => {
  return list.filter((card) => card.genre === genre);
};

const pagesProps = {
  MAIN: {
    genres: settings.genres,
    movieCards: settings.movieCards,
    userData: settings.userData,
    currentVideoID: settings.defaultVideoID
  },
  MOVIE: {
    currentCard: getCurrentMovieCard(settings.defaultVideoID, settings.movieCards),
    moviesLikeThis: getMoviesLikeThis(getCurrentMovieCard(settings.defaultVideoID, settings.movieCards).genre, settings.movieCards),
    userData: settings.userData,
  }
};

const init = () => {
  ReactDom.render(
      <App
        {...pagesProps}
      />,
      document.getElementById(`root`)
  );
};

init();
