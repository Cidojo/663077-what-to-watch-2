import * as React from 'react';
import {MovieCardThumbnail} from '../movie-card-thumbnail/movie-card-thumbnail.jsx';
import {movieCardsPropTypes, cardsPerPagePropTypes} from './../../global-custom-types.js';

const Catalog = (props) => {
  const {movieCards, cardsPerPage} = props;

  return (
    <div className="catalog__movies-list">
      {movieCards.slice(0, cardsPerPage).map((card, i) => <MovieCardThumbnail key={`${card.id}_${i}`} card={card} />)}
    </div>
  );
};

Catalog.propTypes = {
  movieCards: movieCardsPropTypes,
  cardsPerPage: cardsPerPagePropTypes
};

export {Catalog};
