import * as React from 'react';
import {PlayerControls} from './../../components/player-controls/player-controls.jsx';

const INITIAL_STATE = {
  isPlaying: false,
  currentTime: 0,
  totalTime: 0,
  onPlayButtonClick: () => {},
  onCloseButtonClick: () => {},
  onFullscreenButtonClick: () => {}
};

const withControls = (Component) => {
  const renderControls = (props) => {
    return <PlayerControls {...props} />;
  };

  const WithControls = (props) => {
    return (
      <Component
        {...props}
        renderControls={renderControls}
      />
    );
  };

  return WithControls;
};

export default withControls;
