import * as React from 'react';
import * as PropTypes from 'prop-types';

const withPlayingState = (Component) => {
  class WithPlayingState extends React.PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        autoplay: false,
        isPlaying: false
      };

      this.handlePlayToggle = this.handlePlayToggle.bind(this);
      this.handleEnterFullscreen = this.handleEnterFullscreen.bind(this);

      this._handlePauseEvent = this._handlePauseEvent.bind(this);
      this._handlePlayEvent = this._handlePlayEvent.bind(this);
    }

    componentDidMount() {
      const video = this.videoRef.current;
      const autoplay = this.props.autoplay;

      if (autoplay) {
        video.play();
      }

      video.onplay = () => {
        this._handlePlayEvent();
      };

      video.onpause = () => {
        this._handlePauseEvent();
      };
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      const {isPlaying} = this.state;

      if (!this.props.autoplay && video.currentTime) {
        video.load();
      } else if (isPlaying) {
        video.play();
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
    }

    _handlePauseEvent() {
      this.setState({
        isPlaying: false
      });
    }

    _handlePlayEvent() {
      this.setState({
        isPlaying: true
      });
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
          videoRef={this.videoRef}
          isPlaying={this.state.isPlaying}
          onPlayToggle={this.handlePlayToggle}
          onFullscreenButtonClick={this.handleEnterFullscreen}
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
        return state;
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
