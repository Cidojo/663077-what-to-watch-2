import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Selectors from './../../selectors/selectors.js';
import {HomePage} from './../pages/home-page/home-page.jsx';
import {MovieDetails} from './../pages/movie-details/movie-details.jsx';

import {movieCardPropTypes} from './../../global-custom-types.js';


const App = (props) => {
  const {
    movieCards,
    activeCard,
    genre
  } = props;

  if (!movieCards.length || !activeCard || !genre) {
    return <h1>Loading</h1>;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' render={() => (
          <HomePage
            genre={genre}
            genres={Selectors.getGenresList(movieCards)}
            activeCard={activeCard}
            catalogCards={Selectors.getRelatedMovies(movieCards, genre)}
          />)}
        />
        <Route exact path='/details' render={() => (
          <MovieDetails
            relatedMovies={Selectors.getRelatedMovies(movieCards, activeCard.genre)}
            activeCard={activeCard}
            genre={genre}
          />)}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  activeCard: movieCardPropTypes,
  genre: PropTypes.string
};

App.defaultProps = {
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  activeCard: {},
  genre: ``
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    movieCards: Selectors.getMovieCards(state),
    activeCard: Selectors.getActiveCard(state),
    genre: Selectors.getGenre(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
