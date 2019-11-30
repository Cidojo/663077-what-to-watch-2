import * as React from 'react';
import PropTypes from 'prop-types';
import {PlayerControls} from './../../components/player-controls/player-controls.jsx';

const withControls = (Component) => {
  class WithControls extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: this.props.isPlaying
      };

      this._handlePlay = this._handlePlay.bind(this);
      this.renderControls = this.renderControls.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          renderControls={this.renderControls}
        />
      );
    }

    _handlePlay() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    renderControls(duration, currentTime) {
      return (
        <PlayerControls
          isPlaying={this.state.isPlaying}
          duration={duration}
          currentTime={currentTime}
          onPlayButtonClick={this._handlePlay}
        />
      );
    }
  }

  WithControls.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
  };

  WithControls.defaultProps = {
    isPlaying: false,
  };

  return WithControls;
};

export default withControls;
