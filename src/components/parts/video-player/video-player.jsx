import * as React from 'react';
import * as PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplay = () => {
      this.props.onCanPlay(video.duration);
      if (this.props.isPlaying) {
        video.play();
      }
    };


    video.ontimeupdate = (e) => this.props.onProgress(e.currentTarget.currentTime);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }

    if (this.props.isFullscreen) {
      this._handleFullscreen();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.ontimeupdate = null;
    video.oncanplay = null;
  }

  _handleFullscreen() {
    const video = this._videoRef.current;

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
    const {src, poster, muted} = this.props;

    return (
      <video
        className="player__video"
        ref={this._videoRef}
        src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
        poster={poster}
        muted={muted}
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  muted: PropTypes.bool,
  fullscreen: PropTypes.bool
};

VideoPlayer.defaultProps = {
  onCanPlay: () => {},
  isPlaying: false,
  poster: ``,
  src: ``,
  muted: false,
  fullscreen: false
};

export {VideoPlayer};
