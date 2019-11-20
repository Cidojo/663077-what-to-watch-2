import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCard} from './../movie-card/movie-card.jsx';
import {PageContent} from './../page-content/page-content.jsx';
import {Logotype} from './../logotype/logotype.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MainPage = (props) => {
  const {
    genre,
    genres,
    movieCards,
    currentVideoID,
    userData,
    maxCatalogCards,
    maxGenresToDisplay,
    onGenreTabClick
  } = props;

  const currentVideoCard = movieCards.find((card) => card.id === currentVideoID);

  return (
    <React.Fragment>
      <Logotype />
      <MovieCard
        card={currentVideoCard}
        userAvatar={userData.avatar}
      />
      <PageContent
        genre={genre}
        genres={genres}
        movieCards={movieCards}
        maxCatalogCards={maxCatalogCards}
        maxGenresToDisplay={maxGenresToDisplay}
        onGenreTabClick={onGenreTabClick}
      />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.shape({
    all: PropTypes.string,
    rest: PropTypes.arrayOf(PropTypes.string)
  }),
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string
  }),
  currentVideoID: PropTypes.number,
  maxCatalogCards: PropTypes.number,
  maxGenresToDisplay: PropTypes.number,
  onGenreTabClick: PropTypes.func.isRequired,
};

export {MainPage};
