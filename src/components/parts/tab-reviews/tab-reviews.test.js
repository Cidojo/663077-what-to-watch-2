import * as React from 'react';
import {TabReviews} from './tab-reviews.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  reviews: []
};

it(`should render TabReviews component without errors`, () => {
  const tree = renderer.create(<TabReviews {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
