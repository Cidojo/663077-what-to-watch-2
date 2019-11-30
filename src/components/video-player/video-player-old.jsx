import * as React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    src,
    posterSrc,
    isPlaying,
    isStopped,
    isFullscreen,
    onTimeUpdate,
    onExitFullscreen,
    onPlay
  } = props;

  const _handleExitFullscreen = (e) => {
    if (e.currentTarget !== document.fullscreenElement) {
      e.currentTarget.removeEventListener(`fullscreenchange`, _handleExitFullscreen);
      e.currentTarget.removeEventListener(`play`, onPlay);
      e.currentTarget.removeEventListener(`pause`, onPlay);
      onExitFullscreen();
    }
  };

  const _handleEnterFullscreen = (video) => {
    video.addEventListener(`fullscreenchange`, _handleExitFullscreen);
    video.addEventListener(`play`, onPlay);
    video.addEventListener(`pause`, onPlay);
  };

  const managePlayerState = (video) => {
    if (!video || document.fullscreenElement === video) {
      return;
    }

    if (isStopped && video.currentTime !== 0) {
      video.currentTime = 0;
      video.load();
      return;
    }

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    if (isFullscreen) {
      video.requestFullscreen()
        .then(() => {
          _handleEnterFullscreen(video);
        })
        .catch((err) => void (err));
    }
  };

  return (
    <video
      ref={(video) => {
        managePlayerState(video);
      }}
      src={src}
      className="player__video"
      poster={posterSrc}
      onTimeUpdate={onTimeUpdate}
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isStopped: PropTypes.bool.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool.isRequired,
  onExitFullscreen: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired
};

VideoPlayer.defaultProps = {
  src: `#`,
  posterSrc: `#`,
  isPlaying: false,
  isStopped: true,
  isFullscreen: false,
  onTimeUpdate: () => {},
  onExitFullscreen: () => {},
  onPlay: () => {}
};

export {VideoPlayer};
