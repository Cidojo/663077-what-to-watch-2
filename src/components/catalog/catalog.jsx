import * as React from 'react';
import * as PropTypes from 'prop-types';
import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const Catalog = (props) => {

  const {
    movieCards,
    maxCatalogCards
  } = props;

  return (
    <div className="catalog__movies-list">
      {movieCards.slice(0, maxCatalogCards).map((card) => {
        return <SmallMovieCard key={card.id} card={card} />;
      })}
    </div>
  );
};

Catalog.propTypes = {
  active: PropTypes.number,
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  maxCatalogCards: PropTypes.number.isRequired
};

Catalog.defaultProps = {
  active: 0,
  movieCards: [],
  maxCatalogCards: 0
};

export {Catalog};
