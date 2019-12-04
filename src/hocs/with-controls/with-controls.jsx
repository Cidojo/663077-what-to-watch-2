import * as React from 'react';
import PropTypes from 'prop-types';
import {PlayerControls} from './../../components/player-controls/player-controls.jsx';
import {Button} from './../../components/button/button.jsx';

const withControls = (Player) => {
  class WithControls extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        fullscreen: false
      };
    }

    render() {
      return (
        <>
          <Player
            {...this.props}
            fullscreen={this.state.fullscreen}
          />
          <Button
            className="player__exit"
            onClick={this.props.onClosePlayer}
          >
            Exit
          </Button>
          <PlayerControls
            secondsPlayed={this.props.secondsPlayed}
            onStatusUpdate={this.props.onStatusUpdate}
          />
        </>
      );
    }
  }

  WithControls.propTypes = {
  };

  WithControls.defaultProps = {
    secondsPlayed: 0,
    onStatusUpdate: () => {},
    onClosePlayer: () => {}
  };

  return WithControls;
};

export default withControls;
