import * as React from 'react';
import {Review} from './review.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  review: {
    id: 0,
    user: {
      id: 0,
      name: ``,
    },
    rating: 0,
    comment: ``,
    date: ``
  }
};

it(`should render Review component without errors`, () => {
  const tree = renderer.create(<Review {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
