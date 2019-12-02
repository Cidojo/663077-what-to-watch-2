import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCardImage} from '../movie-card-image/movie-card-image.jsx';
import {movieCardPropTypes} from './../../global-custom-types';
import withVideo from './../../hocs/with-video/with-video.jsx';

const MovieCardImageWrapped = withVideo(MovieCardImage);

const MovieCardThumbnail = (props) => {
  const {
    card,
    isPlaying,
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
      <MovieCardImageWrapped
        isPlaying={isPlaying}
        src={card.src}
        poster={card.posterSrc}
      />
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
  isPlaying: PropTypes.oneOf([true, false, null]),
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
