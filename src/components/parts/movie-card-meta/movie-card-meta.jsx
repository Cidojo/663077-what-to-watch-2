import * as React from 'react';
import * as PropTypes from 'prop-types';

const MovieCardMeta = (props) => {
  const {name, genre, released} = props;
  return (
    <>
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
    </>
  );
};

MovieCardMeta.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.number
};

MovieCardMeta.defaultProps = {
  name: ``,
  genre: ``,
  released: 0
};

export {MovieCardMeta};
