import * as React from 'react';
import * as PropTypes from 'prop-types';

import {Video} from './../video/video.jsx';
import PlayerControls from './../player-controls/player-controls.jsx';
import {Button} from './../button/button.jsx';
import withPlayingState from './../../../hocs/with-playing-state/with-playing-state.jsx';
import {movieCardPropTypes} from './../../../global-custom-types.js';

const Player = (props) => {
  const {
    card,
    muted,
    controls,
    onClosePlayer,
    videoRef,
    isPlaying,
    onFullscreenButtonClick,
    onPlayToggle
  } = props;

  const {previewVideoLink, posterImage} = card;

  return (
    <>
      <Video
        videoLink={previewVideoLink}
        posterImage={posterImage}
        muted={muted}
        ref={videoRef}
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
            videoRef={videoRef}
            isPlaying={isPlaying}
            onPlayToggle={onPlayToggle}
            onFullscreenButtonClick={onFullscreenButtonClick}
          />
        </>
      }
    </>
  );
};

Player.propTypes = {
  card: movieCardPropTypes,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  onClosePlayer: PropTypes.func,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }),
  isPlaying: false,
  onFullscreenButtonClick: () => {},
  onPlayToggle: () => {}
};

Player.defaultProps = {
  card: movieCardPropTypes,
  muted: false,
  controls: false,
  onClosePlayer: () => {},
  isPlaying: false,
  onFullscreenButtonClick: () => {},
  onPlayToggle: () => {}
};

export {Player};
export default withPlayingState(Player);
