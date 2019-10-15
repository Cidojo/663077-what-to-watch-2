import * as React from 'react';
import {Header} from "../header/header.jsx";
import {movieCardPropTypes, userDataPropTypes} from "./../../global-custom-types.jsx";

const MovieCard = (props) => {
  const {card, userData} = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={card.imgSrc} alt={card.imgDescription} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header userData={userData} />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={card.posterSrc} alt={card.imgDescription} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{card.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{card.genre}</span>
              <span className="movie-card__year">{card.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  userData: userDataPropTypes,
  card: movieCardPropTypes
};

export {MovieCard};
