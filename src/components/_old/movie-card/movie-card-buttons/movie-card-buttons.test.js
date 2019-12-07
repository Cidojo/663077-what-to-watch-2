import * as React from 'react';
import {MovieCardButtons} from './movie-card-buttons.jsx';
import * as renderer from 'react-test-renderer';

it(`should render component without errors`, () => {
  const tree = renderer
    .create(<MovieCardButtons />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
