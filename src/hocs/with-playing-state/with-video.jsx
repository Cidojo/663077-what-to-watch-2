import * as React from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isLoading: false,
        isPlaying: props.isPlaying,
        currentTime: 0,
        duration: 0
      };

      this._handlePlay = this._handlePlay.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._renderVideo = this._renderVideo.bind(this);
    }

    render() {
      const {
        isPlaying,
        isLoading,
        duration,
        currentTime
      } = this.state;

      const {renderControls} = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isLoading={isLoading}
          renderVideo={this._renderVideo}
          controls={renderControls(duration, currentTime)}
        />
      );
    }

    componentDidMount() {
      const {src, poster} = this.props;

      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;

      video.oncanplay = () => {
        this.setState({duration: video.duration});

        this.setState({
          isLoading: false,
          duration: video.duration
        });
      };

      video.ontimeupdate = () => this._handleTimeUpdate(video.currentTime);

      video.onplay = () => this.setState({
        isPlaying: true
      });

      video.onpause = () => {
        if (video.readyState > 2) {
          this.setState({
            isPlaying: false
          });
        }
      };

      this.setState({
        duration: video.duration
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    _handleTimeUpdate(time) {
      this.setState({
        currentTime: time
      });
    }

    _handlePlay() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    _renderVideo() {
      return (
        <video
          className="player__video"
          ref={this._videoRef}
        />
      );
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool,
    src: PropTypes.string,
    poster: PropTypes.string,
    renderControls: PropTypes.func.isRequired
  };
  WithVideo.defaultProps = {
    isPlaying: false,
    src: ``,
    poster: ``,
    renderControls: () => {}
  };

  return WithVideo;
};

export default withVideo;
