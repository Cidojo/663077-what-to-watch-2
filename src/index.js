import * as React from 'react';
import * as ReactDom from 'react-dom';
import {MainPage} from './components/main-page/main-page.jsx';

import {Genres as MockGenres, MovieCards as MockMovieCards} from './mock/mock.js';

const settings = {
  currentVideoID: 21,
  genres: MockGenres,
  movieCards: MockMovieCards,
  userData: {
    avatar: `img/avatar.jpg`
  },
  cardsPerPage: 20
};

const init = () => {
  ReactDom.render(
      <MainPage
        genres={settings.genres}
        movieCards={settings.movieCards}
        userData={settings.userData}
        currentVideoID={settings.currentVideoID}
        cardsPerPage={settings.cardsPerPage}
      />,
      document.getElementById(`root`)
  );
};

init();
