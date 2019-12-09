import * as React from 'react';
import * as PropTypes from 'prop-types';

const Video = React.forwardRef((props, ref) => {
  const {posterImage, videoLink, muted} = props;

  return (
    <video
      className="player__video"
      ref={ref}
      src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
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
