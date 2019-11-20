import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ThumbnailPlayer} from '../thumbnail-player/thumbnail-player.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MovieCardThumbnail = (props) => {
  const {card, isPlaying, onThumbnailMouseEnter, onThumbnailMouseLeave, onThumbnailClick} = props;

  const _handleThumbnailMouseEnter = () => {
    onThumbnailMouseEnter(card.id);
  };

  const _handleThumbnailMouseLeave = () => {
    onThumbnailMouseLeave();
  };

  const _handleThumbnailClick = () => {
    onThumbnailClick(card.id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={_handleThumbnailMouseEnter}
      onMouseLeave={_handleThumbnailMouseLeave}
    >
      <div className="small-movie-card__image">
        <ThumbnailPlayer
          src={card.src}
          posterSrc={card.posterSrc}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={card.link}
          onClick={_handleThumbnailClick}
        >
          {card.title}
        </a>
      </h3>
    </article>
  );
};

MovieCardThumbnail.propTypes = {
  card: movieCardPropTypes,
  onThumbnailClick: PropTypes.func,
  onThumbnailMouseEnter: PropTypes.func,
  onThumbnailMouseLeave: PropTypes.func,
  isPlaying: PropTypes.bool
};

export {MovieCardThumbnail};
