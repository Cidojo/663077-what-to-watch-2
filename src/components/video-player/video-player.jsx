import * as React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.ontimeupdate = (e) => this.props.onProgress(e.currentTarget.currentTime);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }

    if (this.props.fullscreen) {
      video.requestFullscreen();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.ontimeupdate = null;
  }

  render() {
    const {src, poster, muted} = this.props;

    return (
      <video
        className="player__video"
        ref={this._videoRef}
        src={src}
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
  isPlaying: false,
  poster: ``,
  src: ``,
  muted: false,
  fullscreen: false
};

export {VideoPlayer};
