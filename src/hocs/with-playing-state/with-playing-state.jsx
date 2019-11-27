import * as React from 'react';
import PropTypes from 'prop-types';
import {VideoPlayer} from '../../components/video-player/video-player.jsx';

const INITIAL_STATE = {
  isPlaying: false,
  isStopped: true,
  isFullscreen: false,
  currentTime: 0,
  totalTime: 0,
  isMuted: false
};

const withPlayingState = (Component) => {
  class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = INITIAL_STATE;

      this._handlePlay = this._handlePlay.bind(this);
      this._handleStop = this._handleStop.bind(this);
      this._handleEnterFullscreen = this._handleEnterFullscreen.bind(this);
      this._handleExitFullscreen = this._handleExitFullscreen.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this.renderPlayer = this.renderPlayer.bind(this);
    }

    renderPlayer(props) {
      return (
        <VideoPlayer
          {...props}
        />
      );
    }

    _handleTimeUpdate(e) {
      this.setState({
        currentTime: e.currentTarget.currentTime,
        totalTime: e.currentTarget.duration
      });
    }

    _handlePlay() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
        isStopped: false
      }));
    }

    _handleStop() {
      this.setState({
        isPlaying: false,
        isStopped: true
      });
    }

    _handleEnterFullscreen() {
      this.setState({
        isFullscreen: true
      });
    }

    _handleExitFullscreen() {
      this.setState({
        isFullscreen: false
      });
    }

    render() {
      const {
        isPlaying,
        isStopped,
        isFullscreen,
        currentTime,
        totalTime
      } = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isStopped={isStopped}
          isFullscreen={isFullscreen}
          currentTime={currentTime}
          totalTime={totalTime}
          onTimeUpdate={this._handleTimeUpdate}
          onPlay={this._handlePlay}
          onStop={this._handleStop}
          onEnterFullscreen={this._handleEnterFullscreen}
          onExitFullscreen={this._handleExitFullscreen}
        />
      );
    }
  }

  WrappedComponent.propTypes = {
    isPlaying: PropTypes.bool,
    isStopped: PropTypes.bool,
    isMuted: PropTypes.bool,
    isFullscreen: PropTypes.bool
  };
  WrappedComponent.defaultProps = {
    isPlaying: false,
    isStopped: true,
    isMuted: false,
    isFullscreen: false
  };

  return WrappedComponent;
};

export default withPlayingState;
