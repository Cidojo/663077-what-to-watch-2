import * as React from 'react';
import PropTypes from 'prop-types';

const withPlayer = (Wrapped, Player) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showPlayer: false,
        isPlaying: false,
        secondsPlayed: 0,
        duration: 0
      };

      this.handleOpenPlayer = this.handleOpenPlayer.bind(this);
      this.handleClosePlayer = this.handleClosePlayer.bind(this);
      this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
      this.handleProgress = this.handleProgress.bind(this);
      this.handleDurationSet = this.handleDurationSet.bind(this);
      this.renderPlayer = this.renderPlayer.bind(this);
    }

    handleStatusUpdate(status) {
      this.setState({
        isPlaying: status
      });
    }

    handleOpenPlayer() {
      this.setState({
        showPlayer: true
      });
    }

    handleClosePlayer() {
      this.setState({
        showPlayer: false
      });

      this.props.onClosePlayer();
    }

    handleProgress(seconds) {
      this.setState({
        secondsPlayed: seconds
      });
    }

    handleDurationSet(seconds) {
      this.setState({
        duration: seconds
      });
    }

    renderPlayer(src, poster, muted) {
      return (
        <Player
          secondsPlayed={this.state.secondsPlayed}
          onProgress={this.handleProgress}
          onCanPlay={this.handleDurationSet}
          isPlaying={this.state.isPlaying}
          onStatusUpdate={this.handleStatusUpdate}
          onClosePlayer={this.handleClosePlayer}
          duration={this.state.duration}
          src={src}
          poster={poster}
          muted={muted}
        />
      );
    }

    render() {
      return (
        <Wrapped
          renderPlayer={this.renderPlayer}
          onStatusUpdate={this.handleStatusUpdate}
          onOpenPlayer={this.handleOpenPlayer}
          {...this.props}
        />
      );
    }

    static getDerivedStateFromProps(props) {
      return (props.isPlaying === undefined) ? null : {
        isPlaying: props.isPlaying
      };
    }
  }

  WithPlayer.propTypes = {
    src: PropTypes.string,
    poster: PropTypes.string,
    muted: PropTypes.bool
  };

  WithPlayer.defaultProps = {
    src: ``,
    poster: ``,
    muted: false
  };

  return WithPlayer;
};

export default withPlayer;
