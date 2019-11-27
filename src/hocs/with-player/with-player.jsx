import * as React from 'react';
import {VideoPlayer} from './../../components/video-player/video-player.jsx';

const withPlayer = (Component) => {
  const renderPlayer = (props) => {
    const {
      isPlaying,
      isStopped,
      isFullscreen,
      onTimeUpdate,
      onExitFullscreen,
      onPlay
    } = props;

    return (
      <VideoPlayer
        isPlaying={isPlaying}
        isStopped={isStopped}
        isFullscreen={isFullscreen}
        onTimeUpdate={onTimeUpdate}
        onExitFullscreen={onExitFullscreen}
        onPlay={onPlay}
      />
    );
  };

  const WrappedComponent = (props) => {
    return (
      <Component
        {...props}
        Player={renderPlayer({...props, src: props.movieCards[0].src, posterSrc: ''})}
      />
    );
  };

  return WrappedComponent;
};

export default withPlayer;
