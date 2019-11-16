import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MainPage} from './../main-page/main-page.jsx';
import {MoviePage} from './../movie-page/movie-page.jsx';

const App = (props) => {
  const _handleCurrentVideoIDChange = () => {};

  switch (location.pathname) {
    case `/`:
      return <MainPage {...props.MAIN} onCurrentVideoIDChange={_handleCurrentVideoIDChange} />;
    case `/details`:
      return <MoviePage {...props.MOVIE}/>;
  }

  return null;
};

App.propTypes = {
  MAIN: PropTypes.object, // temporary simplified
  MOVIE: PropTypes.object // temporary simplified
};

export {App};
