import * as React from 'react';
import * as PropTypes from 'prop-types';

import {evalRatingLevel} from './../../../utils/utils.js';

const TabOverview = (props) => {
  const {
    description,
    director,
    starring,
    rating,
    scoresCount,
  } = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{evalRatingLevel(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and
          other</strong></p>
      </div>
    </>
  );
};

TabOverview.propTypes = {
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string)
};

TabOverview.defaultProps = {
  rating: 0,
  scoresCount: 0,
  description: ``,
  director: ``,
  starring: []
};

export {TabOverview};
