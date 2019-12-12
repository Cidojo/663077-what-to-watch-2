import * as React from 'react';
import {PlayerControls} from './player-controls.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  isPlaying: false,
  secondsPlayed: 0,
  duration: 0,
  movieTitle: ``,
  onPlayToggle: () => {},
  onFullscreenButtonClick: () => {}
};

it(`should render PlayerControls component without errors`, () => {
  const tree = renderer.create(<PlayerControls {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
