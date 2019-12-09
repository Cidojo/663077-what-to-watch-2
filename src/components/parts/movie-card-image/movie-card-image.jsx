import * as React from 'react';
import * as PropTypes from 'prop-types';

import {VideoPlayer} from './../video-player/video-player.jsx';
import withPlayer from './../../../hocs/with-player/with-player.jsx';

import {SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY} from '../../../constants/constants.js';

const MovieCardImage = (props) => {
  let timerId = null;

  const {renderPlayer, src, poster, muted, onStatusUpdate} = props;

  const _handleMovieCardMouseEnter = () => {
    timerId = setTimeout(() => onStatusUpdate(true), SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY);
  };

  const _handleMovieCardMouseLeave = () => {
    clearTimeout(timerId);

    onStatusUpdate(false);
  };

  return (
    <div
      className="small-movie-card__image"
      onMouseEnter={_handleMovieCardMouseEnter}
      onMouseLeave={_handleMovieCardMouseLeave}
    >
      {renderPlayer(src, poster, muted)}
    </div>
  );
};

MovieCardImage.propTypes = {
  // player: PropTypes.element,
  onStatusUpdate: PropTypes.func
};

MovieCardImage.defaultProps = {
  renderPlayer: () => {},
  onStatusUpdate: () => {}
};

export {MovieCardImage};
export default withPlayer(MovieCardImage, VideoPlayer);
