import * as React from 'react';
import PropTypes from 'prop-types';

const withPlayer = (Wrapped, Player) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showPlayer: false,
        isPlaying: false,
        secondsPlayed: 0
      };

      this.handleOpenPlayer = this.handleOpenPlayer.bind(this);
      this.handleClosePlayer = this.handleClosePlayer.bind(this);
      this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
      this.handleProgress = this.handleProgress.bind(this);
    }

    static getDerivedStateFromProps(props) {
      return (props.isPlaying === undefined) ? null : {
        isPlaying: props.isPlaying
      };
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
    }

    handleProgress(seconds) {
      this.setState({
        secondsPlayed: seconds
      });
    }

    render() {
      return (
        <Wrapped
          player={
            <Player
              secondsPlayed={this.state.secondsPlayed}
              onProgress={this.handleProgress}
              isPlaying={this.state.isPlaying}
              onStatusUpdate={this.handleStatusUpdate}
              onClosePlayer={this.handleClosePlayer}
              src={this.props.src}
              poster={this.props.poster}
              muted={this.props.muted}
            />
          }
          onStatusUpdate={this.handleStatusUpdate}
          onOpenPlayer={this.handleOpenPlayer}
          showPlayer={this.state.showPlayer}
          {...this.props}
        />
      );
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
