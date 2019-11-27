import * as React from 'react';
import {VideoPlayer} from './../../components/video-player/video-player.jsx';
import {PlayerControls} from '../../components/player-controls/player-controls.jsx';

const withPlayer = (Component) => {
  const WrappedComponent = (props) => {
    const {
      isPlaying,
      isStopped,
      isFullscreen,
      onTimeUpdate,
      onExitFullscreen,
      onPlay,
      currentTime,
      totalTime,
      onEnterFullscreen
    } = props;

    const renderPlayer = (src, posterSrc) => {
      return (
        <VideoPlayer
          src={src}
          posterSrc={posterSrc}
          isPlaying={isPlaying}
          isStopped={isStopped}
          isFullscreen={isFullscreen}
          onTimeUpdate={onTimeUpdate}
          onExitFullscreen={onExitFullscreen}
          onPlay={onPlay}
        />
      );
    };

    const renderControls = (onClose) => {
      return (
        <PlayerControls
          isPlaying={isPlaying}
          currentTime={currentTime}
          totalTime={totalTime}
          onPlayButtonClick={onPlay}
          onCloseButtonClick={onClose}
          onFullscreenButtonClick={onEnterFullscreen}
        />
      );
    };

    return (
      <Component
        {...props}
        renderPlayer={renderPlayer}
        renderControls={renderControls}
      />
    );
  };

  return WrappedComponent;
};

export default withPlayer;
