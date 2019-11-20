import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MainPage} from './../main-page/main-page.jsx';
import {MoviePage} from './../movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from './../../reducer.js';
import {movieCardPropTypes} from './../../global-custom-types';

const App = (props) => {
  const {
    genre,
    genres,
    movieCards,
    userData,
    currentVideoID,
    maxCatalogCardsOnMainPage,
    maxCatalogCardsOnDetailsPage,
    maxGenresToDisplay,
    onGenreFilterClick,
  } = props;

  switch (location.pathname) {
    case `/`:
      return (
        <MainPage
          genre={genre}
          genres={genres}
          movieCards={movieCards}
          userData={userData}
          currentVideoID={currentVideoID}
          maxCatalogCards={maxCatalogCardsOnMainPage}
          maxGenresToDisplay={maxGenresToDisplay}
          onGenreTabClick={onGenreFilterClick}
        />
      );
    case `/details`:
      return (
        <MoviePage
          movieCards={movieCards}
          currentVideoID={currentVideoID}
          userData={userData}
          maxCatalogCards={maxCatalogCardsOnDetailsPage}
        />
      );
  }

  return null;
};

App.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.shape({
    all: PropTypes.string,
    rest: PropTypes.arrayOf(PropTypes.string)
  }),
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }),
  currentVideoID: PropTypes.number,
  maxCatalogCardsOnMainPage: PropTypes.number,
  maxCatalogCardsOnDetailsPage: PropTypes.number,
  maxGenresToDisplay: PropTypes.number,
  onGenreFilterClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  movieCards: state.movieCards
});

const mapDispatchToProps = (dispatch) => ({
  onGenreFilterClick: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
