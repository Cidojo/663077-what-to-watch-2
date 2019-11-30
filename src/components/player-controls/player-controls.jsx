import * as React from 'react';
import PropTypes from 'prop-types';
import {SvgIcon} from './../svg-icon/svg-icon.jsx';
import {Icons} from './../../constants.js';
import {formatCurrentTime, evalProgress} from './../../utils/utils.js';

const PlayerControls = (props) => {
  const {
    isPlaying,
    onFullscreenButtonClick,
    onPlayButtonClick,
    currentTime,
    duration
  } = props;
  const iconOptions = isPlaying ? Icons.PAUSE : Icons.PLAY;

  const progress = evalProgress(currentTime, duration);

  return (
    <React.Fragment>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div
              className="player__toggler"
              style={{
                left: `${progress}%`
              }}
            >Toggler</div>
          </div>
          <div className="player__time-value">{formatCurrentTime(currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            <SvgIcon {...iconOptions} />
            <span>{isPlaying ? `Pause` : `Pause`}</span>
          </button>

          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullscreenButtonClick}
          >
            <SvgIcon {...Icons.FULL_SCREEN} />
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
};

PlayerControls.defaultProps = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  onPlayButtonClick: () => {},
  onFullscreenButtonClick: () => {}
};

export {PlayerControls};
