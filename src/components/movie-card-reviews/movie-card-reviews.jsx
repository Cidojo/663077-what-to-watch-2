import * as React from 'react';
import {Review} from './../review/review.jsx';
import {reviews} from './../../mocks/reviews.js';
import {movieCardPropTypes} from './../../global-custom-types';

const MovieCardReviews = (props) => {
  const {id} = props.card;
  const thisMovieReviews = reviews.filter((review) => review.id === id);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {thisMovieReviews
          .sort((reviewCurrent, reviewNext) => Date.parse(reviewCurrent.date) - Date.parse(reviewNext.date))
          .map((review) => {
            return (
              <Review
                key={Date.parse(review.date)}
                review={review}
              />
            );
          })}
      </div>
    </div>
  );
};

MovieCardReviews.propTypes = {
  card: movieCardPropTypes
};

export {MovieCardReviews};
