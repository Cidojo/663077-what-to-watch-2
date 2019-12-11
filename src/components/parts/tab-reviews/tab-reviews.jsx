import * as React from 'react';
import * as PropTypes from 'prop-types';

import {Review} from './../review/review.jsx';

const TabReviews = (props) => {
  const {reviews} = props;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => {
          return (
            <Review
              key={review.id}
              review={review}
            />
          );
        })}
      </div>
    </div>
  );
};

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string
  }))
};

TabReviews.defaultProps = {
  reviews: []
};

export {TabReviews};
