import * as React from 'react';
import * as PropTypes from 'prop-types';

import {PlayerControls} from './../../components/parts/player-controls/player-controls.jsx';
import {Button} from './../../components/parts/button/button.jsx';

const withControls = (Player) => {
  class WithControls extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFullscreen: false
      };
    }

    render() {
      return (
        <>
          <Player
            {...this.props}
            isFullscreen={this.state.isFullscreen}
          />
          <Button
            className="player__exit"
            onClick={this.props.onClosePlayer}
          >
            Exit
          </Button>
          <PlayerControls
            duration={this.props.duration}
            secondsPlayed={this.props.secondsPlayed}
            onFullscreenButtonClick={() => {this.setState({isFullscreen: true})}}
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
