import * as React from 'react';
import {MovieRating} from './movie-rating.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<MovieRating
      rating={0}
      scores={0}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
