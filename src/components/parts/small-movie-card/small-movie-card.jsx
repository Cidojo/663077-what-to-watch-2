import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import MovieCardImageWrapped from './../movie-card-image/movie-card-image.jsx';
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
      <MovieCardImageWrapped
        src={card.previewVideoLink}
        muted={true}
        poster={card.posterImage}
      />
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${card.id}`}
          onClick={_handleMovieCardTitleClick}
        >
          {card.name}
        </Link>
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
