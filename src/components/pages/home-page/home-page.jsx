import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Header} from './../../parts/header/header.jsx';
import {MovieCardButtons} from './../../parts/movie-card-buttons/movie-card-buttons.jsx';
import Catalog from './../../parts/catalog/catalog.jsx';
import {Footer} from './../../parts/footer/footer.jsx';
import GenreList from './../../parts/genre-list/genre-list.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';
import Selectors from './../../../selectors/selectors.js';
import withPlayerScreen from './../../../hocs/with-player-screen/with-player-screen.jsx';
import Player from './../../parts/player/player.jsx';

const HomePage = (props) => {
  const {
    activeCard,
    catalogCards,
    isAuthorizationRequired,
    onShowPlayer,
    onClosePlayer,
    isPlayerShown
  } = props;

  const {
    id,
    name,
    backgroundImage,
    posterImage,
    genre,
    released
  } = activeCard;

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

              <MovieCardButtons
                movieId={id}
                onPlayButtonClick={onShowPlayer}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <Catalog
            movieCards={catalogCards}
            withShowMoreButton={true}
          />
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
  catalogCards: PropTypes.arrayOf(movieCardPropTypes),
  isAuthorizationRequired: PropTypes.bool,
  onShowPlayer: PropTypes.func,
  onClosePlayer: PropTypes.func,
  isPlayerShown: PropTypes.bool
};

HomePage.defaultProps = {
  genre: ``,
  genres: [],
  activeCard: {},
  catalogCards: [],
  isAuthorizationRequired: true,
  onShowPlayer: () => {},
  onClosePlayer: () => {},
  isPlayerShown: false
};

const HomePageWrapped = withPlayerScreen(HomePage);

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuthorizationRequired: Selectors.getAuthState(state),
    catalogCards: Selectors.getActiveGenreCards(state),
    genre: Selectors.getGenre(state)
  });
};

export {HomePage};
export default connect(mapStateToProps)(HomePageWrapped);
