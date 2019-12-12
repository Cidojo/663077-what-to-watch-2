import * as React from 'react';
import {MovieCardTabs} from './movie-card-tabs.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  active: ``,
  onActiveChange: () => {},
  movie: {},
  reviews: []
};

it(`should render MovieCardTabs component without errors`, () => {
  const tree = renderer.create(<MovieCardTabs {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
