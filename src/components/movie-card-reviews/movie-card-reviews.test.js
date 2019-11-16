import * as React from 'react';
import {MovieCardReviews} from './movie-card-reviews.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {

  const tree = renderer
    .create(<MovieCardReviews
      card={{
        id: 0
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
