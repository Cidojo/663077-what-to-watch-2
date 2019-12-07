import * as React from 'react';
import {SmallMovieCard} from './small-movie-card.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<SmallMovieCard
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

      onMovieCardClick={() => {}}
      onMovieCardMouseEnter={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
