import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MovieCard} from './../movie-card/movie-card.jsx';
import {PageContent} from './../page-content/page-content.jsx';
import {Sprite} from '../sprite/sprite.jsx';
import {movieCardPropTypes} from './../../global-custom-types';

const MainPage = (props) => {
  const {
    movieCards,
    activeCard,
    userData
  } = props;

  return (
    <React.Fragment>
      <Sprite />
      <MovieCard
        card={activeCard}
        userAvatar={userData.avatar}
        isFull={true}
      />
      <PageContent
        movieCards={movieCards}
      />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string
  }),
  activeCard: movieCardPropTypes
};

export {MainPage};
