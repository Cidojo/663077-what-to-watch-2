import * as React from 'react';
import * as PropTypes from 'prop-types';

import Player from './../player/player.jsx';
import withAutoplay from './../../../hocs/with-autoplay/with-autoplay.jsx';

import {SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY} from '../../../constants/constants.js';
import {movieCardPropTypes} from "../../../global-custom-types";

const MovieCardImage = (props) => {
  let timerId = null;

  const {
    card,
    autoplay,
    onAutoplayStatusUpdate
  } = props;

  const _handleMovieCardMouseEnter = () => {
    timerId = setTimeout(() => onAutoplayStatusUpdate(true), SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY);
  };

  const _handleMovieCardMouseLeave = () => {
    clearTimeout(timerId);

    onAutoplayStatusUpdate(false);
  };

  return (
    <div
      className="small-movie-card__image"
      onMouseEnter={_handleMovieCardMouseEnter}
      onMouseLeave={_handleMovieCardMouseLeave}
    >
      <Player
        card={card}
        autoplay={autoplay}
        controls={false}
        muted={true}
      />
    </div>
  );
};

MovieCardImage.propTypes = {
  card: movieCardPropTypes,
  autoplay: PropTypes.bool,
  onAutoplayStatusUpdate: PropTypes.func
};

MovieCardImage.defaultProps = {
  card: {},
  autoplay: false,
  onAutoplayStatusUpdate: () => {}
};

export {MovieCardImage};
export default withAutoplay(MovieCardImage);
