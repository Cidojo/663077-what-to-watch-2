import * as React from 'react';
import PropTypes from 'prop-types';
import {VideoPlayer} from './../../components/video-player/video-player.jsx';

const withPlayer = (Component) => {
  class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullscreen: false,
        currentTime: 0,
        movieDuration: 0
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handleStop = this._handleStop.bind(this);
      this._handleEnterFullscreen = this._handleEnterFullscreen.bind(this);
      this._handleExitFullscreen = this._handleExitFullscreen.bind(this);
      this.renderPlayer = this.renderPlayer.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    _handleTimeUpdate(e) {
      this.setState({
        currentTime: e.currentTarget.currentTime,
        movieDuration: e.currentTarget.duration
      });
    }

    renderPlayer(props) {
      return (
        <VideoPlayer
          {...props}
          {...this.state}
          onPlay={this._handlePlay}
          onExitFullscreen={this._handleExitFullscreen}
          onTimeUpdate={this._handleTimeUpdate}
        />
      );
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
      this.setState(() => ({isFullscreen: true}));
    }

    _handleExitFullscreen() {
      this.setState(() => ({isFullscreen: false}));
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          renderPlayer={this.renderPlayer}
          onPlay={this._handlePlay}
          onStop={this._handleStop}
          onFullscreenButtonClick={this._handleEnterFullscreen}
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

export default withPlayer;
