import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCardThumbnail} from './../movie-card-thumbnail/movie-card-thumbnail.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const ON_THUMBNAIL_MOUSE_ENTER_DELAY = 1000;

const Catalog = (props) => {
  let timerId = null;

  const {
    active,
    movieCards,
    onActiveChange,
    maxCatalogCards
  } = props;

  const _handleCardMouseEnter = (id) => {
    timerId = setTimeout(() => onActiveChange(id), ON_THUMBNAIL_MOUSE_ENTER_DELAY);
  };

  const _handleCardMouseLeave = () => {
    clearTimeout(timerId);

    onActiveChange(null);
  };

  return (
    <div className="catalog__movies-list">
      {
        movieCards
          .slice(0, maxCatalogCards).map((card) => {
            return (
              <MovieCardThumbnail
                key={`${card.id}`}
                card={card}
                isPlaying={active === card.id}
                isStopped={!(active === card.id)}
                onThumbnailMouseEnter={_handleCardMouseEnter}
                onThumbnailMouseLeave={_handleCardMouseLeave}
                onThumbnailClick={onActiveChange}
              />
            );
          })
      }
    </div>
  );
};

Catalog.propTypes = {
  active: PropTypes.number,
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  maxCatalogCards: PropTypes.number.isRequired,
  onActiveChange: PropTypes.func
};

Catalog.defaultProps = {
  active: 0,
  movieCards: [],
  maxCatalogCards: 0,
  onActiveChange: () => {}
};

export {Catalog};
