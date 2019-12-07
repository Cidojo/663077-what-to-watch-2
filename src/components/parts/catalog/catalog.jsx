import * as React from 'react';
import * as PropTypes from 'prop-types';

import {SmallMovieCard} from '../small-movie-card/small-movie-card.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';

const Catalog = (props) => {

  const {
    movieCards,
    maxCatalogCards,
    active
  } = props;

  return (
    <div className="catalog__movies-list">
      {movieCards.slice(0, maxCatalogCards).map((card) => {
        return <SmallMovieCard key={card.id} card={card} isActive={active === card} />;
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
  active: null,
  movieCards: [],
  maxCatalogCards: 10
};

export {Catalog};
