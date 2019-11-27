import * as React from 'react';
import * as PropTypes from 'prop-types';

const ThumbnailPlayer = (props) => {
  const {src, posterSrc, isPlaying, isStopped, isMuted} = props;

  const playVideo = (video) => {
    if (!video) {
      return;
    }

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    if (isStopped) {
      video.currentTieme = 0;
      video.load();
    }
  };

  return (
    <video
      ref={(video) => {
        playVideo(video);
      }}
      src={src}
      className="player__video"
      poster={posterSrc}
      muted={isMuted ? true : void (0)}
    >
    </video>
  );
};

ThumbnailPlayer.propTypes = {
  src: PropTypes.string,
  posterSrc: PropTypes.string,
  isPlaying: PropTypes.bool,
  isStopped: PropTypes.bool,
  isMuted: PropTypes.bool
};

export {ThumbnailPlayer};
