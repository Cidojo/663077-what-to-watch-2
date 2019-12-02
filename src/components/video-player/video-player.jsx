import * as React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    renderVideo,
    controls
  } = props;

  return (
    <div className="player">
      {renderVideo()}
      {controls}
    </div>
  );
};

VideoPlayer.propTypes = {
  renderVideo: PropTypes.func.isRequired,
  controls: PropTypes.element
};

VideoPlayer.defaultProps = {
  renderVideo: () => {}
};

export {VideoPlayer};
