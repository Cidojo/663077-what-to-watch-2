import * as React from 'react';
import {Catalog} from './catalog.jsx';
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

  const tree = renderer
    .create(<Catalog
      movieCards={movieCards}
      maxCatalogCards={0}
      onCurrentVideoIDChange={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});