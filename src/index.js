import * as React from 'react';
import * as ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer';
import App from './components/app/app.jsx';

const settings = {
  currentVideoID: 1,
  genre: `All genres`,
  genres: [
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`
  ],
  maxGenresToDisplay: 9,
  movieCards: [{
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `#CBAC79`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    isFavorite: false,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    link: `/details`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    imgSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imgDescription: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Dramas`,
    year: 2014,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    director: `Wes Andreson`,
    rating: 8.9,
    ratingCount: 240,
    runTime: 99
  }],
  userData: {
    name: `unknown`,
    avatar: `img/avatar.jpg`
  },
  maxCatalogCardsOnMainPage: 20,
  maxCatalogCardsOnDetailsPage: 4
};

const init = () => {
  const store = createStore(reducer);

  ReactDom.render(
      <Provider store={store}>
        <App
          {...settings}
        />
      </Provider>,
      document.getElementById(`root`)
  );
};

init();
