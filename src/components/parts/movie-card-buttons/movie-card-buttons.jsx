import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import {Button} from './../button/button.jsx';

import {Icon} from '../../../constants/constants.js';
import {MoviesOperation} from './../../../reducers/movies-reducer/movies-reducer.js';
import {Url} from './../../../constants/constants.js';
import Selectors from './../../../selectors/selectors.js';

const MovieCardButtons = (props) => {
  const {
    onPlayButtonClick,
    onAddToFavoriteClick,
    card
  } = props;

  const {id, isFavorite} = card;

  const handleAddToFavoriteClick = () => {
    onAddToFavoriteClick(id, isFavorite);
  };

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
        icon={isFavorite ? Icon.IN_LIST : Icon.ADD}
        onClick={handleAddToFavoriteClick}
      >
        My list
      </Button>

      {window.location.pathname !== `/` &&
        <Link
          to={`${Url.FILM}/${id + Url.REVIEWS}`}
          className="btn movie-card__button"
        >
          Add review
        </Link>
      }
    </div>
  );
};

MovieCardButtons.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    isFavorite: PropTypes.bool
  }),
  cardId: PropTypes.number,
  onPlayButtonClick: PropTypes.func.isRequired,
  onAddToFavoriteClick: PropTypes.func,
};

MovieCardButtons.defaultProps = {
  card: {},
  cardId: 0,
  onPlayButtonClick: () => {},
  onAddToFavoriteClick: () => {},
};

const mapStateToProps = (state, ownProps) => (
  Object.assign({}, ownProps, {
    card: Selectors.getActiveCardById(state, ownProps.cardId)
  })
);

const mapDispatchToProps = (dispatch) => ({
  onAddToFavoriteClick: bindActionCreators(MoviesOperation.addToFavorite, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardButtons);
export {MovieCardButtons};
