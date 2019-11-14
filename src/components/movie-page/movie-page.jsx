import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Logotype} from './../logotype/logotype.jsx';
import {MovieCardButtons} from '../movie-card-buttons/movie-card-buttons.jsx';
import {Catalog} from '../catalog/catalog.jsx';
import {Header} from '../header/header.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MoviePage = (props) => {
  const {currentCard, moviesLikeThis, onCurrentVideoIDChange} = props;

  return (
    <React.Fragment>
      <Logotype />
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentCard.imgSrc} alt={currentCard.imgDescription} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header avatar={``} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentCard.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentCard.genre}</span>
                <span className="movie-card__year">{currentCard.year}</span>
              </p>

              <MovieCardButtons />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentCard.posterSrc} alt={currentCard.imgDescription} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{currentCard.rating.score}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{currentCard.rating.level}</span>
                  <span className="movie-rating__count">{currentCard.rating.count} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying
                  the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies
                  mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
                  murder.</p>

                <p className="movie-card__director"><strong>Director: {currentCard.director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {currentCard.starring.join(`, `)} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Catalog
            movieCards={moviesLikeThis}
            onCurrentVideoIDChange={onCurrentVideoIDChange}
          />
        </section>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  moviesLikeThis: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    avatar: PropTypes.string
  }),
  currentCard: movieCardPropTypes,
  onCurrentVideoIDChange: PropTypes.func
};

export {MoviePage};
