import * as React from 'react';
import * as PropTypes from 'prop-types';
import {evalRatingLevel} from './../../utils/utils.js';

const MovieRating = (props) => {
  const {rating, scores} = props;

  return (
    <div className="movie-rating">
      <div className="movie-rating__score">{rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{evalRatingLevel(rating)}</span>
        <span className="movie-rating__count">{scores} ratings</span>
      </p>
    </div>
  );
};

MovieRating.propTypes = {
  rating: PropTypes.number,
  scores: PropTypes.number,
};

export {MovieRating};
