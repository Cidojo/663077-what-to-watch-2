import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCard} from './../movie-card/movie-card.jsx';
import {PageContent} from './../page-content/page-content.jsx';
import {Logotype} from './../logotype/logotype.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MainPage = (props) => {
  const {currentVideoID, movieCards, genres, userData, onCurrentVideoIDChange} = props;
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
        onCurrentVideoIDChange={onCurrentVideoIDChange}
      />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  genres: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  }),
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    avatar: PropTypes.string
  }),
  currentVideoID: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  cardsPerPage: PropTypes.number,
  onCurrentVideoIDChange: PropTypes.func
};

export {MainPage};
