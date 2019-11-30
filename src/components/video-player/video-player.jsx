import * as React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    renderVideo,
    controls
  } = props;

  return (
    <>
      {renderVideo()}
      {controls}
    </>
  );
};

VideoPlayer.propTypes = {
  renderVideo: PropTypes.func.isRequired,
  controls: PropTypes.element
};

VideoPlayer.defaultProps = {
  renderVideo: () => {},
  controls: undefined
};

export {VideoPlayer};
