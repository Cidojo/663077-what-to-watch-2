import * as React from 'react';
import {movieCardPropTypes} from './../../../../global-custom-types';

const MovieCardOverview = (props) => {
  const {description, director, starring} = props.card;
  return (
    <div className="movie-card__text">
      <p>{description}</p>
      <p className="movie-card__director"><strong>Director: {director}</strong></p>

      <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and
        other</strong></p>
    </div>
  );
};

MovieCardOverview.propTypes = {
  card: movieCardPropTypes
};

export {MovieCardOverview};
