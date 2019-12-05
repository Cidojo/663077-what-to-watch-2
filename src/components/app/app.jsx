import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MainPage} from './../main-page/main-page.jsx';
import {MoviePage} from './../movie-page/movie-page.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from './../../reducer.js';
import {movieCardPropTypes} from './../../global-custom-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
const App = (props) => {
  const {
    movieCards,
    userData,
    activeCard
  } = props;

  switch (location.pathname) {
    case `/`:
      return (
        <MainPage
          movieCards={movieCards}
          userData={userData}
          activeCard={activeCard}
        />
      );
    case `/details`:
      return (
        <MoviePage
          movieCards={movieCards}
          activeCard={activeCard}
          userData={userData}
        />
      );
  }

  return null;
};

App.propTypes = {
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }),
  activeCard: movieCardPropTypes
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movieCards: state.movieCards,
  activeCard: state.activeCard
});

const mapDispatchToProps = (dispatch) => ({
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
