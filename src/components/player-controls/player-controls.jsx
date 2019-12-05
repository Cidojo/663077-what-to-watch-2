import * as React from 'react';
import PropTypes from 'prop-types';
import {Button} from './../button/button.jsx';
import {PlayerTime} from './../player-time/player-time.jsx';

const PlayerControls = (props) => {
  const {
    isPlaying,
    onFullscreenButtonClick,
    onPlayButtonClick,
    currentTime,
    duration,
    movieTitle
  } = props;


  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <PlayerTime
          duration={duration}
          currentTime={currentTime}
        />
      </div>

      <div className="player__controls-row">
        <Button
          className="player__play"
          icon={isPlaying ? `PAUSE` : `PLAY`}
          onClick={onPlayButtonClick}
        >
          {isPlaying ? `Pause` : `Play`}
        </Button>

        <div className="player__name">{duration ? movieTitle : `Transpotting`}</div>

        <Button
          className="player__full-screen"
          icon="FULL_SCREEN"
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
  currentTime: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired
};

PlayerControls.defaultProps = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  movieTitle: ``,
  onPlayButtonClick: () => {},
  onFullscreenButtonClick: () => {}
};

export {PlayerControls};
