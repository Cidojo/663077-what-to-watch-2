import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Sprite} from './../../parts/sprite/sprite.jsx';
import {MovieCardBackground} from './../../parts/movie-card-background/movie-card-background.jsx';
import {Header} from './../../parts/header/header.jsx';
import {Footer} from './../../parts/footer/footer.jsx';
import {MovieCardButtons} from './../../parts/movie-card-buttons/movie-card-buttons.jsx';
import {MovieCardMeta} from './../../parts/movie-card-meta/movie-card-meta.jsx';
import {MovieCardPoster} from './../../parts/movie-card-poster/movie-card-poster.jsx';
import {Catalog} from './../../parts/catalog/catalog.jsx';
import MovieCardTabWithActiveTab from './../../parts/movie-card-tabs/movie-card-tabs.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';

const MovieDetails = (props) => {
  const {activeCard, relatedMovies, genre} = props;

  if (!activeCard) {
    return undefined;
  }

  const {
    id,
    name,
    backgroundImage,
    videoLink,
    videoPreview,
    released,
    isFavorite,
    posterImage
  } = activeCard;

  return (
    <>
      <Sprite />
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MovieCardBackground
            name={name}
            backgroundImage={backgroundImage}
          />

          <h1 className="visually-hidden">WTW</h1>

          <Header
            extraClassName="movie-card__head"
            isWithUserBlock={true}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <MovieCardMeta
                name={name}
                genre={genre}
                released={released}
              />
              <MovieCardButtons
                movieId={id}
                isFavorite={isFavorite}
              />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">

            <MovieCardPoster
              classMods="movie-card__poster--big"
              name={name}
              posterImage={posterImage}
            />

            <MovieCardTabWithActiveTab
              movie={activeCard}
              // comments={comments}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog
          movies={relatedMovies}
          sectionClassMods="catalog--like-this"
          sectionTitle="More like this"
        />
        <Footer/>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  genre: PropTypes.string,
  activeCard: movieCardPropTypes,
  relatedMovies: PropTypes.array
};

MovieDetails.defaultProps = {
  genre: ``,
  activeCard: {},
  relatedMovies: []
};

export {MovieDetails};
