import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {MovieCardBackground} from './../../parts/movie-card-background/movie-card-background.jsx';
import {Header} from './../../parts/header/header.jsx';
import {Footer} from './../../parts/footer/footer.jsx';
import MovieCardButtons from './../../parts/movie-card-buttons/movie-card-buttons.jsx';
import {MovieCardMeta} from './../../parts/movie-card-meta/movie-card-meta.jsx';
import {MovieCardPoster} from './../../parts/movie-card-poster/movie-card-poster.jsx';
import Catalog from './../../parts/catalog/catalog.jsx';
import Player from './../../parts/player/player.jsx';
import MovieCardTabWithActiveTab from './../../parts/movie-card-tabs/movie-card-tabs.jsx';

import withPlayerScreen from './../../../hocs/with-player-screen/with-player-screen.jsx';
import {movieCardPropTypes} from './../../../global-custom-types.js';
import Selectors from './../../../selectors/selectors.js';
import {ReviewsOperation} from './../../../reducers/reviews-reducer/reviews-reducer.js';

class MovieDetails extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    const {onLoadReviews, match} = this.props;
    const requestedId = parseInt(match.params.id, 10);

    if (prevProps.activeCard.id !== requestedId) {
      onLoadReviews(requestedId);
    }
  }

  render() {
    const {
      activeCard,
      relatedMovies,
      onShowPlayer,
      onClosePlayer,
      isPlayerShown,
      reviews
    } = this.props;

    const {
      name,
      backgroundImage,
      released,
      posterImage,
      genre
    } = activeCard;

    if (isPlayerShown) {
      return (
        <div className="player">
          <Player
            card={activeCard}
            autoplay={true}
            controls={true}
            onClosePlayer={onClosePlayer}
          />
        </div>
      );
    }

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <MovieCardBackground
              name={name}
              backgroundImage={backgroundImage}
            />

            <h1 className="visually-hidden">WTW</h1>

            <Header
              extraClassName="movie-card__head"
              isWithUserBlock={true}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <MovieCardMeta
                  name={name}
                  genre={genre}
                  released={released}
                />
                <MovieCardButtons
                  cardId={activeCard.id}
                  onPlayButtonClick={onShowPlayer}
                />
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">

              <MovieCardPoster
                classMods="movie-card__poster--big"
                name={name}
                posterImage={posterImage}
              />

              <MovieCardTabWithActiveTab
                movie={activeCard}
                reviews={reviews}
              />
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <Catalog
              movieCards={relatedMovies}
            />
            <Footer/>
          </section>
        </div>
      </>
    );
  }
}

MovieDetails.propTypes = {
  activeCard: movieCardPropTypes,
  relatedMovies: PropTypes.array,
  isPlayerShown: PropTypes.bool,
  onShowPlayer: PropTypes.func,
  onClosePlayer: PropTypes.func,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    date: PropTypes.string
  })),
  onLoadReviews: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

MovieDetails.defaultProps = {
  activeCard: {},
  relatedMovies: [],
  isPlayerShown: false,
  onShowPlayer: () => {},
  onClosePlayer: () => {},
  onLoadReviews: () => {},
  reviews: {
    id: 0,
    user: {
      id: 0,
      name: ``,
    },
    rating: 0,
    comment: 0,
    date: ``
  },
  match: {
    params: {
      id: 0
    }
  }
};

const MovieDetailsWrapped = withPlayerScreen(MovieDetails);

const mapDispatchToProps = (dispatch) => ({
  onLoadReviews: bindActionCreators(ReviewsOperation.loadReviews, dispatch)
});

const mapStateToProps = (state, ownProps) => {
  const requestedId = parseInt(ownProps.match.params.id, 10);
  const activeCard = Selectors.getActiveCardById(state, requestedId);

  return Object.assign({}, ownProps, {
    activeCard,
    relatedMovies: Selectors.getRelatedMovies(state, activeCard),
    reviews: Selectors.getReviews(state, requestedId)
  });
};

export {MovieDetails};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsWrapped);
