import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  genresPropTypes,
  movieCardsPropTypes,
  userDataPropTypes
} from './../../global-custom-types.js';

import {MovieCard} from './../movie-card/movie-card.jsx';
import {PageContent} from './../page-content/page-content.jsx';
import {Logotype} from './../logotype/logotype.jsx';

const MainPage = (props) => {
  const {currentVideoID, movieCards, genres, userData, cardsPerPage, handleCurrentVideoIDChange} = props;
  const currentVideoCard = movieCards.find((card) => card.id === currentVideoID);

  return (
    <React.Fragment>
      <Logotype />
      <MovieCard
        card={currentVideoCard || movieCards[0]}
        userAvatar={userData.avatar}
      />
      <PageContent
        genres={genres}
        movieCards={movieCards}
        cardsPerPage={cardsPerPage}
        handleCurrentVideoIDChange={handleCurrentVideoIDChange}
      />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  genres: genresPropTypes,
  movieCards: movieCardsPropTypes,
  userData: userDataPropTypes,
  currentVideoID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  cardsPerPage: PropTypes.number,
  handleCurrentVideoIDChange: PropTypes.func
};

export {MainPage};
