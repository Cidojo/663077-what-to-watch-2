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
    onCurrentVideoIDChange,
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
        onGenreTabClick={onGenreTabClick}
        onCurrentVideoIDChange={onCurrentVideoIDChange}
      />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  genre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string
  }),
  currentVideoID: PropTypes.number,
  maxCatalogCards: PropTypes.number,
  onGenreTabClick: PropTypes.func.isRequired,
  onCurrentVideoIDChange: PropTypes.func,
};

export {MainPage};
