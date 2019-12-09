import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';
import {ShowMoreButton} from './../show-more-button/show-more-button.jsx';

import {DisplayCountActionCreator} from './../../../reducers/display-count-reducer/display-count-reducer.js';
import {movieCardPropTypes} from './../../../global-custom-types.js';
import Selectors from './../../../selectors/selectors.js';
import {SHOW_MORE_STEP} from './../../../constants/constants.js';

const Catalog = (props) => {
  const {
    movieCards,
    active,
    withShowMoreButton,
    displayCount,
    onShowMore
  } = props;

  const handleShowMore = () => {
    onShowMore(displayCount);
  };

  return (
    <>
      <div className="catalog__movies-list">
        {movieCards.slice(0, displayCount).map((card) => {
          return <SmallMovieCard key={card.id} card={card} isActive={active === card} />;
        })}
      </div>
      {withShowMoreButton && movieCards.length >= displayCount &&
        <ShowMoreButton
          onButtonClick={handleShowMore}
        />
      }
    </>
  );
};

Catalog.propTypes = {
  active: PropTypes.number,
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  displayCount: PropTypes.number,
  withShowMoreButton: PropTypes.bool,
  onShowMore: PropTypes.func.isRequired
};

Catalog.defaultProps = {
  active: null,
  movieCards: [],
  withShowMoreButton: false,
  displayCount: 0,
  onShowMore: () => {}
};

const mapDispatchToProps = (dispatch) => ({
  onShowMore: (shownCount) => {
    dispatch(DisplayCountActionCreator.incrementCount(shownCount + SHOW_MORE_STEP));
  }
});

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    displayCount: Selectors.getDisplayCount(state)
  });
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
