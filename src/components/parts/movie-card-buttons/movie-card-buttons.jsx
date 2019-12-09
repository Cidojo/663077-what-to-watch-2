import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Icon} from '../../../constants/constants.js';
import {Button} from './../button/button.jsx';

const MovieCardButtons = (props) => {
  const {onPlayButtonClick, movieId} = props;

  return (
    <div className="movie-card__buttons">
      <Button
        onClick={onPlayButtonClick}
        className="btn btn--play movie-card__button"
        icon={Icon.PLAY}
      >
        Play
      </Button>
      <Button
        className="btn btn--list movie-card__button"
        icon={Icon.ADD}
      >
        My list
      </Button>

      {window.location.pathname !== `/` &&
        <Link
          to={`/films/${movieId}/review`}
          className="btn movie-card__button"
        >
          Add review
        </Link>
      }
    </div>
  );
};

MovieCardButtons.propTypes = {
  movieId: PropTypes.number,
  isFavorite: PropTypes.bool,
  onPlayButtonClick: PropTypes.func.isRequired,
};

MovieCardButtons.defaultProps = {
  movieId: 1,
  isFavorite: false,
  onPlayButtonClick: () => {}
};

export {MovieCardButtons};
