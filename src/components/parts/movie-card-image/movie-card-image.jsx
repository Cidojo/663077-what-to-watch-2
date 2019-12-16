import * as React from 'react';
import * as PropTypes from 'prop-types';

import Player from './../player/player.jsx';
import withAutoplay from './../../../hocs/with-autoplay/with-autoplay.jsx';

import {SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY} from '../../../constants/constants.js';
import {movieCardPropTypes} from './../../../global-custom-types.js';

class MovieCardImage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timerId = null;

    this.handleMovieCardMouseEnter = this.handleMovieCardMouseEnter.bind(this);
    this.handleMovieCardMouseLeave = this.handleMovieCardMouseLeave.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  handleMovieCardMouseLeave() {
    clearTimeout(this.timerId);

    this.props.onAutoplayStatusUpdate(false);
  }

  handleMovieCardMouseEnter() {
    this.timerId = setTimeout(() => this.props.onAutoplayStatusUpdate(true), SMALL_MOVIE_CARD_MOUSE_ENTER_DELAY);
  }

  render() {
    const {
      card,
      autoplay
    } = this.props;

    return (
      <div
        className="small-movie-card__image"
        onMouseEnter={this.handleMovieCardMouseEnter}
        onMouseLeave={this.handleMovieCardMouseLeave}
      >
        <Player
          card={card}
          autoplay={autoplay}
          controls={false}
          muted={true}
        />
      </div>
    );
  }
}

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
