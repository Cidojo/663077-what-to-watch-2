import * as React from 'react';
import PropTypes from 'prop-types';

import {Sprite} from './../../parts/sprite/sprite.jsx';
import {Header} from './../../parts/header/header.jsx';
import {MovieCardButtons} from './../../parts/movie-card-buttons/movie-card-buttons.jsx';
import {Catalog} from './../../parts/catalog/catalog.jsx';
import {Footer} from './../../parts/footer/footer.jsx';
import {ShowMoreButton} from './../../parts/show-more-button/show-more-button.jsx';
import GenreListWithActiveItem from './../../parts/genre-list/genre-list.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';

const MAX_CATALOG_CARDS = 8;

const HomePage = (props) => {
  const {
    activeCard,
    genres,
    catalogCards
  } = props;

  const {
    name,
    backgroundImage,
    posterImage,
    genre,
    released
  } = activeCard;

  return (
    <>
      <Sprite />

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

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

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreListWithActiveItem
            genres={genres}
            onActiveChange={() => {}}
          />
          <Catalog
            movieCards={catalogCards}
          />
          {catalogCards.length > MAX_CATALOG_CARDS &&
            <ShowMoreButton
              onButtonClick={() => {}}
            />
          }
        </section>
        <Footer/>
      </div>
    </>
  );
};

HomePage.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  activeCard: movieCardPropTypes,
  catalogCards: PropTypes.arrayOf(movieCardPropTypes)
};

HomePage.defaultProps = {
  genre: ``,
  genres: [],
  activeCard: {},
  catalogCards: []
};

export {HomePage};
