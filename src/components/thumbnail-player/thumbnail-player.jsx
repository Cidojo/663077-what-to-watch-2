import * as React from 'react';
import * as PropTypes from 'prop-types';

const ThumbnailPlayer = (props) => {
  const {src, posterSrc, isPlaying} = props;

  const playVideo = (video) => {
    if (!video) {
      return;
    }

    video.muted = true;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();

      if (video.currentTime) {
        video.load();
      }
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
    >
    </video>
  );
};

ThumbnailPlayer.propTypes = {
  src: PropTypes.string,
  posterSrc: PropTypes.string,
  isPlaying: PropTypes.bool
};

export {ThumbnailPlayer};
