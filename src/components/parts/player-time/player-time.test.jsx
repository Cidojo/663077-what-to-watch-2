import * as React from 'react';
import {PlayerTime} from './player-time.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  duration: 0,
  currentTime: 0
};

it(`should render PlayerTime component without errors`, () => {
  const tree = renderer.create(<PlayerTime {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
