import * as React from 'react';
import * as PropTypes from 'prop-types';

import {Review} from './../review/review.jsx';
import {reviews} from './../../../mocks/reviews.js';

const TabReviews = (props) => {
  const {comment} = props;
  const thisMovieReviews = reviews.filter((review) => review.id === 1);

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

TabReviews.propTypes = {
  comment: PropTypes.string
};

export {TabReviews};
