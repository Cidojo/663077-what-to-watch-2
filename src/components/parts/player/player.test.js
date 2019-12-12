import * as React from 'react';
import {Player} from './player.jsx';
import * as renderer from 'react-test-renderer';

const props = {
  secondsPlayed: 0,
  duration: 0,
  card: {},
  muted: false,
  controls: false,
  onClosePlayer: () => {},
  isPlaying: false,
  onFullscreenButtonClick: () => {},
  onPlayToggle: () => {}
};

it(`should render Player component without errors`, () => {
  const tree = renderer.create(<Player {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
