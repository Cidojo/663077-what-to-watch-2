import * as React from 'react';
import * as PropTypes from 'prop-types';

const SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY = 1000;

const MovieCardImage = (props) => {
  let timerId = null;

  const {player, onStatusUpdate} = props;

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
      {player}
    </div>
  );
};

MovieCardImage.propTypes = {
  player: PropTypes.element,
  onStatusUpdate: PropTypes.func
};

MovieCardImage.defaultProps = {
  player: undefined,
  onStatusUpdate: () => {}
};

export {MovieCardImage};
