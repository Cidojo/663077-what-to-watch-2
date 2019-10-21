import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCardThumbnail} from '../movie-card-thumbnail/movie-card-thumbnail.jsx';
import {movieCardsPropTypes} from './../../global-custom-types.js';

const Catalog = (props) => {
  const {movieCards, cardsPerPage, handleCurrentVideoIDChange} = props;

  return (
    <div className="catalog__movies-list">
      {
        movieCards.slice(0, cardsPerPage).map((card, i) => {
          return (
            <MovieCardThumbnail
              key={`${card.id}_${i}`}
              card={card}
              onThumbnailClick={(e) => {
                e.preventDefault();
                handleCurrentVideoIDChange();
              }}
            />
          );
        })
      }
    </div>
  );
};

Catalog.propTypes = {
  movieCards: movieCardsPropTypes,
  cardsPerPage: PropTypes.number,
  handleCurrentVideoIDChange: PropTypes.func
};

export {Catalog};
