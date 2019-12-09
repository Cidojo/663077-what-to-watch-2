import * as React from 'react';
import * as PropTypes from 'prop-types';

import {formatCurrentTime} from './../../../utils/utils.js';
import {evalProgress} from './../../../utils/utils.js';

const PlayerTime = (props) => {
  const {duration, currentTime} = props;
  const progress = evalProgress(currentTime, duration);


  return (
    <>
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
    </>
  );
};

PlayerTime.propTypes = {
  duration: PropTypes.number,
  currentTime: PropTypes.number
};

PlayerTime.defaultProps = {
  duration: 0,
  currentTime: 0
};

export {PlayerTime};

