import * as React from 'react';
import * as PropTypes from 'prop-types';

import {MovieCardImage} from './../movie-card-image/movie-card-image.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';

const SmallMovieCard = (props) => {
  const {
    card,
    onMovieCardTitleClick
  } = props;

  const _handleMovieCardTitleClick = () => {
    onMovieCardTitleClick(card);
  };

  return (
    <article className="small-movie-card catalog__movies-card">
      <MovieCardImage
        src={card.previewVideoLink}
        muted={true}
        poster={card.posterImage}
      />
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="/details"
          onClick={_handleMovieCardTitleClick}
        >
          {card.name}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  card: movieCardPropTypes.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

SmallMovieCard.defaultProps = {
  card: {},
  onMovieCardTitleClick: () => {},
};

export {SmallMovieCard};
