import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Selectors from './../../selectors/selectors.js';
import HomePage from './../pages/home-page/home-page.jsx';
import MovieDetails from './../pages/movie-details/movie-details.jsx';
import SignIn from './../pages/sign-in/sign-in.jsx';
import {movieCardPropTypes} from './../../global-custom-types.js';

const history = createBrowserHistory();

const App = (props) => {
  const {
    movieCards,
    activeCard
  } = props;

  if (!movieCards.length || !activeCard) {
    return <h1>Loading</h1>;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' render={() => (
          <HomePage
            activeCard={activeCard}
          />)}
        />
        <Route exact path='/films/:id' render={() => (
          <MovieDetails
            activeCard={activeCard}
          />)}
        />
        <Route exact path='/films/:id/review' component={SignIn} />
        <Route exact path='/login' component={SignIn} />
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

export {App};
export default connect(mapStateToProps)(App);
