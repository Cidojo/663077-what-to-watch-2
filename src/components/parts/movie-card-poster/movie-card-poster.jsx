import * as React from 'react';
import * as PropTypes from 'prop-types';

const MovieCardPoster = (props) => {
  const {extraClassName, name, posterImage} = props;

  return (
    <div className={`movie-card__poster ${extraClassName}`}>
      <img
        src={posterImage}
        alt={name}
        width="218"
        height="327"
      />
    </div>
  );
};

MovieCardPoster.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  extraClassName: PropTypes.string
};

MovieCardPoster.defaultProps = {
  name: ``,
  posterImage: ``,
  extraClassName: ``
};

export {MovieCardPoster};
