import * as React from 'react';
import {movieCardPropTypes} from "./../../global-custom-types.jsx";

const MovieCardThumbnail = (props) => {
  const {card} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={card.imgSrc} alt={card.imgDescription} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={card.link}>{card.title}</a>
      </h3>
    </article>
  );
};

MovieCardThumbnail.propTypes = {
  card: movieCardPropTypes
};

export {MovieCardThumbnail};
