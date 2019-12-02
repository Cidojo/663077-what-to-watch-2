import * as React from 'react';
import PropTypes from 'prop-types';
import {PlayerControls} from './../../components/player-controls/player-controls.jsx';
import {Button} from './../../components/button/button.jsx';

const withControls = (Component) => {
  class WithControls extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: this.props.isPlaying,
        currentTime: 0,
        duration: 0
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleCanPlay = this._handleCanPlay.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleEnterFullscreen = this._handleEnterFullscreen.bind(this);
      this._setVideoRef = this._setVideoRef.bind(this);
      this.renderControls = this.renderControls.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          controls={this.renderControls()}
          onRefReady={this._setVideoRef}
          onTimeUpdate={this._handleTimeUpdate}
          onCanPlay={this._handleCanPlay}
        />
      );
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.onplay = () => {
        this.setState({
          isPlaying: true
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false
        });
      };

      // video.ontimeupdate = (e) => {
      //   this._handleTimeUpdate(e);
      // };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    _handleCanPlay(e) {
      this.setState({
        duration: e.currentTarget.duration
      });
    }

    _setVideoRef(videoRef) {
      this._videoRef = videoRef;
    }

    _handlePlay() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    _handleTimeUpdate(e) {
      this.setState({
        currentTime: e.currentTarget.currentTime
      });
    }

    _handleEnterFullscreen() {
      this._videoRef.current.requestFullscreen();
    }

    renderControls() {
      return (
        <>
          <PlayerControls
            movieTitle={this.props.movieTitle}
            isPlaying={this.state.isPlaying}
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            onPlayButtonClick={this._handlePlay}
            onFullscreenButtonClick={this._handleEnterFullscreen}
          />
          <Button
            className="player__exit"
            onClick={this.props.onExitButtonClick}
            buttonText="Exit"
          />
        </>
      );
    }
  }

  WithControls.propTypes = {
    isPlaying: PropTypes.oneOf([true, false, null]),
    movieTitle: PropTypes.string.isRequired,
    onExitButtonClick: PropTypes.func.isRequired
  };

  WithControls.defaultProps = {
    isPlaying: false,
    movieTitle: ``,
    onExitButtonClick: () => {}
  };

  return WithControls;
};

export default withControls;
