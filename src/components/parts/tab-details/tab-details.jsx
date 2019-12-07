import * as React from 'react';
import * as PropTypes from 'prop-types';

import {formatRunTime} from './../../../utils/utils.js';

const TabDetails = (props) => {
  const {
    director,
    starring,
    runTime,
    released,
    genre
  } = props;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((actor) => {
              return (
                <React.Fragment key={actor}>
                  {actor} <br/>
                </React.Fragment>
              );
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatRunTime(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

TabDetails.propTypes = {
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number,
  released: PropTypes.number,
  genre: PropTypes.string
};

TabDetails.defaultProps = {
  director: ``,
  starring: [],
  runTime: 0,
  released: 0,
  genre: ``
};

export {TabDetails};
