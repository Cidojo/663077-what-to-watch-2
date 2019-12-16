import * as React from 'react';
import {Link} from 'react-router-dom';

import MovieCardImageWrapped from './../movie-card-image/movie-card-image.jsx';
import {movieCardPropTypes} from './../../../global-custom-types.js';

const SmallMovieCard = (props) => {
  const {
    card
  } = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${card.id}`}>
        <MovieCardImageWrapped
          card={card}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${card.id}`}
        >
          {card.name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  card: movieCardPropTypes
};

SmallMovieCard.defaultProps = {
  card: {}
};

export {SmallMovieCard};
