import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Header} from '../header/header.jsx';
import {MovieCardButtons} from '../movie-card-buttons/movie-card-buttons.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MovieCard = (props) => {
  const {card, userAvatar} = props;
  const {backgroundImage, name, posterImage, genre, released} = card;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header avatar={userAvatar} />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <MovieCardButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  card: movieCardPropTypes,
  userAvatar: PropTypes.string
};

export {MovieCard};
