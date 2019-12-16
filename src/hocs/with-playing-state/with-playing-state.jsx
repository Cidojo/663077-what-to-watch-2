import * as React from 'react';
import * as PropTypes from 'prop-types';

const withPlayingState = (Component) => {
  class WithPlayingState extends React.Component {
    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        autoplay: false,
        isPlaying: false,
        duration: 0,
        secondsPlayed: 0
      };

      this.handlePlayToggle = this.handlePlayToggle.bind(this);
      this.handleEnterFullscreen = this.handleEnterFullscreen.bind(this);

      this._handlePauseEvent = this._handlePauseEvent.bind(this);
      this._handlePlayEvent = this._handlePlayEvent.bind(this);
      this._handleDurationSet = this._handleDurationSet.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    componentDidMount() {
      const video = this.videoRef.current;
      const autoplay = this.props.autoplay;

      if (!video) {
        return;
      }

      if (autoplay) {
        video.play();
      }

      video.onplay = (e) => {
        e.preventDefault();
        this._handlePlayEvent();
      };

      video.onended = (e) => {
        e.preventDefault();
        e.currentTarget.load();
      };

      video.onpause = (e) => {
        e.preventDefault();
        this._handlePauseEvent();
      };

      video.ontimeupdate = (e) => {
        this._handleTimeUpdate(e.currentTarget.currentTime);
      };

      video.onloadedmetadata = (e) => {
        this._handleDurationSet(e.currentTarget.duration);
      };
    }

    shouldComponentUpdate(_, nextState) {
      return !((document.fullscreenElement === this.videoRef.current) && nextState.isPlaying);
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      const {isPlaying} = this.state;

      if (!this.props.autoplay && video.currentTime) {
        video.load();
      } else if (isPlaying) {
        video.play().catch((err) => {
          throw new Error(`${err} on video play`);
        });
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.onloadedmetadata = null;
      video.onended = null;
    }

    _handleTimeUpdate(seconds) {
      this.setState(() => ({
        secondsPlayed: seconds
      }));
    }

    _handleDurationSet(seconds) {
      this.setState(() => ({
        duration: seconds
      }));
    }

    _handlePauseEvent() {
      if (this.state.isPlaying) {
        this.setState(() => ({
          isPlaying: false
        }));
      }
    }

    _handlePlayEvent() {
      if (!this.state.isPlaying) {
        this.setState({
          isPlaying: true
        });
      }
    }

    handlePlayToggle() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    handleEnterFullscreen() {
      const video = this.videoRef.current;

      if (!video.requestFullscreen) {
        if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      } else {
        video.requestFullscreen();
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          ref={this.videoRef}
          isPlaying={this.state.isPlaying}
          onPlayToggle={this.handlePlayToggle}
          onFullscreenButtonClick={this.handleEnterFullscreen}
          duration={this.state.duration}
          secondsPlayed={this.state.secondsPlayed}
        />
      );
    }

    static getDerivedStateFromProps(props, state) {
      if (props.autoplay !== state.autoplay) {
        return {
          isPlaying: props.autoplay,
          autoplay: props.autoplay
        };
      } else {
        return null;
      }
    }
  }

  WithPlayingState.propTypes = ({
    autoplay: PropTypes.bool
  });

  WithPlayingState.defaultProps = {
    autoplay: false
  };

  return WithPlayingState;
};

export default withPlayingState;
