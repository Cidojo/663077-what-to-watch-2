import * as React from 'react';
import {TabOverview} from './tab-overview.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  rating: 0,
  scoresCount: 0,
  description: ``,
  director: ``,
  starring: []
};

it(`should render TabOverview component without errors`, () => {
  const tree = renderer.create(<TabOverview {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
