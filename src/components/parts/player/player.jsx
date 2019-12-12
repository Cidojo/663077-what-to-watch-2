import * as React from 'react';
import * as PropTypes from 'prop-types';

import {Video} from './../video/video.jsx';
import {PlayerControls} from './../player-controls/player-controls.jsx';
import {Button} from './../button/button.jsx';
import withPlayingState from './../../../hocs/with-playing-state/with-playing-state.jsx';
import {movieCardPropTypes} from './../../../global-custom-types.js';

const Player = React.forwardRef(function Player(props, ref) {
  const {
    card,
    muted,
    controls,
    onClosePlayer,
    isPlaying,
    onFullscreenButtonClick,
    onPlayToggle,
    secondsPlayed,
    duration
  } = props;

  const {previewVideoLink, videoLink, posterImage, previewImage, name} = card;

  return (
    <>
      <Video
        videoLink={controls ? videoLink : previewVideoLink}
        posterImage={controls ? posterImage : previewImage}
        muted={muted}
        ref={ref}
      />
      {controls &&
        <>
          <Button
            className="player__exit"
            onClick={onClosePlayer}
          >
            Exit
          </Button>
          <PlayerControls
            movieTitle={name}
            secondsPlayed={secondsPlayed}
            duration={duration}
            isPlaying={isPlaying}
            onPlayToggle={onPlayToggle}
            onFullscreenButtonClick={onFullscreenButtonClick}
          />
        </>
      }
    </>
  );
});

Player.propTypes = {
  secondsPlayed: PropTypes.number,
  duration: PropTypes.number,
  card: movieCardPropTypes,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  onClosePlayer: PropTypes.func,
  isPlaying: PropTypes.bool,
  onFullscreenButtonClick: PropTypes.func,
  onPlayToggle: PropTypes.func
};

Player.defaultProps = {
  secondsPlayed: 0,
  duration: 0,
  card: {},
  muted: false,
  controls: false,
  onClosePlayer: () => {},
  isPlaying: false,
  onFullscreenButtonClick: () => {},
  onPlayToggle: () => {}
};

export {Player};
export default withPlayingState(Player);
