import * as React from 'react';
import * as PropTypes from 'prop-types';

import {formatDate} from './../../../utils/utils.js';

const Review = (props) => {
  const {review} = props;

  const formattedDate = formatDate(new Date(review.date));

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time
            className="review__date"
            dateTime={formattedDate.dateTime}
          >
            {formattedDate.verbose}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string
  })
};

Review.defaultProps = {
  review: {
    id: 0,
    user: {
      id: 0,
      name: ``,
    },
    rating: 0,
    comment: ``,
    date: ``
  }
};

export {Review};
