import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {MovieCardBackground} from './../../parts/movie-card-background/movie-card-background.jsx';
import {Header} from './../../parts/header/header.jsx';
import {Footer} from './../../parts/footer/footer.jsx';
import {MovieCardButtons} from './../../parts/movie-card-buttons/movie-card-buttons.jsx';
import {MovieCardMeta} from './../../parts/movie-card-meta/movie-card-meta.jsx';
import {MovieCardPoster} from './../../parts/movie-card-poster/movie-card-poster.jsx';
import Catalog from './../../parts/catalog/catalog.jsx';
import Player from './../../parts/player/player.jsx';
import MovieCardTabWithActiveTab from './../../parts/movie-card-tabs/movie-card-tabs.jsx';
import withPlayerScreen from './../../../hocs/with-player-screen/with-player-screen.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';
import Selectors from './../../../selectors/selectors.js';
import {AuthActionCreator} from './../../../reducers/auth-reducer/auth-reducer.js';

const MovieDetails = (props) => {
  const {
    activeCard,
    relatedMovies,
    genre,
    onShowPlayer,
    onClosePlayer,
    isPlayerShown,
    isAuthorizationRequired,
    requireAuth
  } = props;

  if (!activeCard) {
    return undefined;
  }

  const {
    id,
    name,
    backgroundImage,
    released,
    isFavorite,
    posterImage
  } = activeCard;

  // requireAuth();

  if (isAuthorizationRequired) {
    return (
      <Redirect to="/login"/>
    );
  }

  if (isPlayerShown) {
    return (
      <div className="player">
        <Player
          card={activeCard}
          muted={true}
          autoplay={true}
          controls={true}
          onClosePlayer={onClosePlayer}
        />
      </div>
    );
  }

  return (
    <>
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
                onPlayButtonClick={onShowPlayer}
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
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Catalog
            movieCards={relatedMovies}
          />
          <Footer/>
        </section>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  activeCard: movieCardPropTypes,
  genre: PropTypes.string,
  relatedMovies: PropTypes.array,
  isPlayerShown: PropTypes.bool,
  onShowPlayer: PropTypes.func,
  onClosePlayer: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  requireAuth: PropTypes.func
};

MovieDetails.defaultProps = {
  genre: ``,
  activeCard: {},
  relatedMovies: [],
  isPlayerShown: false,
  onShowPlayer: () => {},
  onClosePlayer: () => {},
  isAuthorizationRequired: false,
  requireAuth: () => {}
};

const MovieDetailsWrapped = withPlayerScreen(MovieDetails);

const mapDispatchToProps = (dispatch) => ({
  requireAuth: () => dispatch(AuthActionCreator.requiredAuthorization(true))
});

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuthorizationRequired: Selectors.getAuthRequiredStatus(state),
    relatedMovies: Selectors.getRelatedMovies(state),
  });
};

export {MovieDetails};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsWrapped);
