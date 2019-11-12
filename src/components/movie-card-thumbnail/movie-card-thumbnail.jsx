import * as React from 'react';
import * as PropTypes from 'prop-types';

const MovieCardThumbnail = (props) => {
  const {card, onThumbnailClick, onThumbnailMouseOver} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onThumbnailMouseOver.bind(null, card)}
    >
      <div className="small-movie-card__image">
        <img src={card.imgSrc} alt={card.imgDescription} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={card.link}
          onClick={onThumbnailClick}
        >
          {card.title}
        </a>
      </h3>
    </article>
  );
};

MovieCardThumbnail.propTypes = {
  card: PropTypes.exact({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    imgSrc: PropTypes.string,
    posterSrc: PropTypes.string,
    imgDescription: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.shape({
      score: PropTypes.string,
      level: PropTypes.string,
      count: PropTypes.number
    })
  }),
  onThumbnailClick: PropTypes.func.isRequired,
  onThumbnailMouseOver: PropTypes.func.isRequired
};

export {MovieCardThumbnail};
