import * as React from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isLoading: false,
        isPlaying: props.isPlaying
      };

      this._handlePlay = this._handlePlay.bind(this);
      this.renderVideo = this.renderVideo.bind(this);
    }

    render() {
      const {
        isPlaying,
        isLoading
      } = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isLoading={isLoading}
          renderVideo={this.renderVideo}
        />
      );
    }

    componentDidMount() {
      const {
        src,
        poster,
        onRefReady,
        // onTimeUpdate,
        onCanPlay
      } = this.props;

      const video = this._videoRef.current;

      onRefReady(this._videoRef);

      video.src = src;
      video.poster = poster;

      video.oncanplay = (e) => {
        this.setState({
          isLoading: false
        });

        onCanPlay(e);
      };

      video.onplay = () =>{
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
      //   onTimeUpdate(e);
      // };
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying === null && video.currentTime) {
        video.load();
      } else if (this.props.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplay = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.src = ``;
    }

    _handlePlay() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    renderVideo() {
      return (
        <video
          className="player__video"
          ref={this._videoRef}
        />
      );
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.oneOf([
      true,
      false,
      null
    ]),
    src: PropTypes.string,
    poster: PropTypes.string,
    onRefReady: PropTypes.func.isRequired,
    onCanPlay: PropTypes.func,
    onTimeUpdate: PropTypes.func
  };
  WithVideo.defaultProps = {
    isPlaying: false,
    src: ``,
    poster: ``,
    onRefReady: () => {},
    onCanPlay: () => {},
    onTimeUpdate: () => {}
  };

  return WithVideo;
};

export default withVideo;
