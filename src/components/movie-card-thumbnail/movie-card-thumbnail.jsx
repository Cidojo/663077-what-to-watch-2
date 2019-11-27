import * as React from 'react';
import * as PropTypes from 'prop-types';
import {VideoPlayer} from '../video-player/video-player.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MovieCardThumbnail = (props) => {
  const {
    card,
    isPlaying,
    isStopped,
    onThumbnailMouseEnter,
    onThumbnailMouseLeave,
    onThumbnailClick
  } = props;

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
        <VideoPlayer
          src={card.src}
          posterSrc={card.posterSrc}
          isPlaying={isPlaying}
          isStopped={isStopped}
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
  card: movieCardPropTypes.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
  onThumbnailMouseEnter: PropTypes.func.isRequired,
  onThumbnailMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isStopped: PropTypes.bool,
};

MovieCardThumbnail.defaultProps = {
  card: {},
  onThumbnailClick: () => {},
  onThumbnailMouseEnter: () => {},
  onThumbnailMouseLeave: () => {},
  isPlaying: false,
  isStopped: true,
};

export {MovieCardThumbnail};
