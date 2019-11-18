import * as React from 'react';
import {MovieCardThumbnail} from './movie-card-thumbnail.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<MovieCardThumbnail
      card={{
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
      }}

      onThumbnailClick={() => {}}
      onThumbnailMouseEnter={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
