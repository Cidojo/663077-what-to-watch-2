import * as React from 'react';
import {App} from './app.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const movieCards = [{
    id: 0,
    src: ``,
    imgSrc: ``,
    posterSrc: ``,
    imgDescription: ``,
    link: ``,
    title: ``,
    backgroundColor: ``,
    description: ``,
    isFavorite: false,
    previewSrc: ``,
    genre: ``,
    year: 0,
    director: ``,
    starring: [``],
    rating: 0,
    ratingCount: 0,
    runTime: 0
  }];

  const props = {
    genre: ``,
    genres: {
      all: ``,
      rest: [``]
    },
    movieCards,
    userData: {
      name: ``,
      avatar: ``
    },
    currentVideoID: 0,
    maxCatalogCardsOnMainPage: 0,
    maxCatalogCardsOnDetailsPage: 0,
    maxGenresToDisplay: 0,
    onGenreFilterClick: () => {},
  };

  const tree = renderer
    .create(<App
      {...props}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
