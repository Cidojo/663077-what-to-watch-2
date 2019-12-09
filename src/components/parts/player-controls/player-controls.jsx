import * as React from 'react';
import PropTypes from 'prop-types';

import {Button} from './../button/button.jsx';
import {PlayerTime} from './../player-time/player-time.jsx';
import withTimeline from './../../../hocs/with-timeline/with-timeline.jsx';

import {Icon} from './../../../constants/constants.js';

const PlayButtonText = {
  PLAY: `Play`,
  PAUSE: `Pause`
};

const PlayerControls = (props) => {
  const {
    isPlaying,
    onFullscreenButtonClick,
    onPlayToggle,
    secondsPlayed,
    duration,
    movieTitle
  } = props;

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <PlayerTime
          duration={duration}
          currentTime={secondsPlayed}
        />
      </div>

      <div className="player__controls-row">
        <Button
          className="player__play"
          icon={isPlaying ? Icon.PAUSE : Icon.PLAY}
          onClick={onPlayToggle}
        >
          {isPlaying ? PlayButtonText.PAUSE : PlayButtonText.PLAY}
        </Button>

        <div className="player__name">{duration ? movieTitle : `Transpotting`}</div>

        <Button
          className="player__full-screen"
          icon={Icon.FULL_SCREEN}
          onClick={onFullscreenButtonClick}
        >
          Full screen
        </Button>
      </div>
    </div>
  );
};

PlayerControls.propTypes = {
  isPlaying: PropTypes.oneOf([true, false, null]),
  duration: PropTypes.number.isRequired,
  secondsPlayed: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  onPlayToggle: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired
};

PlayerControls.defaultProps = {
  isPlaying: false,
  secondsPlayed: 0,
  duration: 0,
  movieTitle: ``,
  onPlayToggle: () => {},
  onFullscreenButtonClick: () => {}
};

export {PlayerControls};
export default withTimeline(PlayerControls);
