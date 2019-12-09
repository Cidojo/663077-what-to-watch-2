import * as React from 'react';
import * as PropTypes from 'prop-types';

const Video = React.forwardRef(function Video(props, ref) {
  const {posterImage, muted, videoLink} = props;

  return (
    <video
      className="player__video"
      ref={ref}
      src={videoLink}
      poster={posterImage}
      muted={muted}
    />
  );
});

Video.propTypes = {
  videoLink: PropTypes.string,
  posterImage: PropTypes.string,
  muted: PropTypes.bool
};

Video.defaultProps = {
  videoLink: ``,
  posterImage: ``,
  muted: false
};

export {Video};
