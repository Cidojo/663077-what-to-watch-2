import * as React from 'react';
import {MovieCardBackground} from './movie-card-background.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  name: ``,
  backgroundImage: ``,
};

it(`should render MovieCardBackground component without errors`, () => {
  const tree = renderer.create(<MovieCardBackground {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
