import * as React from 'react';
import * as PropTypes from 'prop-types';

const PLAY_ON_HOVER_TIMEOUT = 1000;

class ThumbnailPlayer extends React.Component {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      timer: null,
      isPlaying: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.resetVideo = this.resetVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }


  componentDidMount() {
    const {subscribeMouseLeave, subscribeMouseEnter} = this.props;

    subscribeMouseEnter(this.handleMouseEnter);
    subscribeMouseLeave(this.handleMouseLeave);

    if (this._videoRef.current) {
      this._videoRef.current.muted = true;
      this._videoRef.current.load();
    }
  }

  render() {
    const {src, posterSrc} = this.props;

    return (
      <video
        ref={this._videoRef}
        src={src}
        className="player__video"
        poster={posterSrc}
        type="video/mp4"
      >
      </video>
    );
  }

  handleMouseEnter() {
    this.clearStateTimer();

    this.setState({
      timer: setTimeout(this.playVideo, PLAY_ON_HOVER_TIMEOUT)
    });
  }

  handleMouseLeave() {
    this.resetVideo();
    this.clearStateTimer();

    this.setState({
      timer: null
    });
  }

  clearStateTimer() {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
  }

  playVideo() {
    this._videoRef.current.play();

    this.setState({
      isPlaying: true
    });
  }

  resetVideo() {
    this._videoRef.current.pause();
    this._videoRef.current.load();

    this.setState({
      isPlaying: false
    });
  }
}

ThumbnailPlayer.propTypes = {
  src: PropTypes.string,
  posterSrc: PropTypes.string,
  bindVideoEl: PropTypes.func,
  subscribeMouseEnter: PropTypes.func,
  subscribeMouseLeave: PropTypes.func,
};

export {ThumbnailPlayer};
