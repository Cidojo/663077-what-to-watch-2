import * as React from 'react';
import {MovieCard} from './movie-card.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<MovieCard
      card={{
        id: 0,
        title: ``,
        link: ``,
        imgSrc: ``,
        posterSrc: ``,
        imgDescription: ``,
        genre: ``,
        year: 0,
        director: ``,
        starring: [],
        rating: {
          score: ``,
          level: ``,
          count: 0
        }
      }}
      userAvatar={``}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
