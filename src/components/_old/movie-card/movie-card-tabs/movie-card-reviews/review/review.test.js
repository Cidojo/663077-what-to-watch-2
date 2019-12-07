import * as React from 'react';
import {Review} from './review.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const review = {
    id: 0,
    user: {
      id: 0,
      name: ``,
    },
    rating: 0,
    comment: ``,
    date: ``
  };

  const tree = renderer
    .create(<Review
      review={review}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
