import * as React from 'react';
import {MainPage} from './main-page.jsx';
import * as renderer from 'react-test-renderer';

it(`should render MainPage component without errors`, () => {
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

  const tree = renderer
    .create(<MainPage
      userData={{
        avatar: ``,
        username: ``
      }}
      currentVideoID={0}
      genre={``}
      genres={{
        all: `All`,
        rest: [`some`]
      }}
      movieCards={movieCards}
      maxCatalogCards={1}
      onGenreTabClick={() => {}}
      onCurrentVideoIDChange={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
