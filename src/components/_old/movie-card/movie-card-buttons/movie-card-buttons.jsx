import * as React from 'react';
import PropTypes from 'prop-types';
import {SvgIcon} from './../../svg-icon/svg-icon.jsx';
import {Icons} from './../../../constants.js';

const MovieCardButtons = (props) => {
  const {onPlayButtonClick} = props;

  return (
    <div className="movie-card__buttons">
      <button
        onClick={onPlayButtonClick}
        className="btn btn--play movie-card__button"
        type="button"
      >
        <SvgIcon {...Icons.PLAY} />
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <SvgIcon {...Icons.ADD} />
        <span>My list</span>
      </button>
    </div>
  );
};

MovieCardButtons.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
};

MovieCardButtons.defaultProps = {
  onPlayButtonClick: () => {}
};

export {MovieCardButtons};
