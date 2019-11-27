import * as React from 'react';
import {PlayerControls} from './../../components/player-controls/player-controls.jsx';

const withControls = (Component) => {
  const renderControls = (props = {
    isPlaying: false,
    currentTime: 0,
    totalTime: 0,
    onPlayButtonClick: () => {},
    onCloseButtonClick: () => {},
    onFullscreenButtonClick: () => {}
  }) => {
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
