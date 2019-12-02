import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Sprite} from '../sprite/sprite.jsx';
import {MovieCardButtons} from '../movie-card-buttons/movie-card-buttons.jsx';
import {Catalog} from '../catalog/catalog.jsx';
import {Header} from '../header/header.jsx';
import {CardNavigation} from '../card-navigation/card-navigation.jsx';
import {movieCardPropTypes} from './../../global-custom-types';
import {MovieRating} from './../movie-rating/movie-rating.jsx';
import {MovieCardOverview} from './../movie-card-overview/movie-card-overview.jsx';
import {MovieCardDetails} from './../movie-card-details/movie-card-details.jsx';
import {MovieCardReviews} from './../movie-card-reviews/movie-card-reviews.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import {VideoPlayer} from './../../components/video-player/video-player.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';
import withControls from './../../hocs/with-controls/with-controls.jsx';

const CatalogWrapped = withActiveItem(Catalog);

const WithVideo = withVideo(VideoPlayer);
const WithControls = withControls(WithVideo);

const DEFAULT_TAB_INDEX = 0;

class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.tabs = [{
      title: `Overview`,
      component: MovieCardOverview
    }, {
      title: `Details`,
      component: MovieCardDetails
    }, {
      title: `Reviews`,
      component: MovieCardReviews
    }];

    this.state = {
      isPlayerShown: false,
      activeTabIndex: DEFAULT_TAB_INDEX
    };

    this._handleTabChange = this._handleTabChange.bind(this);
    this._handleShowPlayer = this._handleShowPlayer.bind(this);
    this._handleHidePlayer = this._handleHidePlayer.bind(this);
  }

  _handleShowPlayer() {
    this.setState({isPlayerShown: true});
  }

  _handleHidePlayer() {
    this.setState({isPlayerShown: false});
  }

  _handleTabChange(clickedTabName) {
    const nextTabIndex = this.tabs.findIndex((tab) => clickedTabName === tab.title);

    if (nextTabIndex > -1) {
      this.setState({
        activeTabIndex: nextTabIndex
      });
    }
  }

  render() {
    const {
      movieCards,
      currentVideoID,
      userData,
      maxCatalogCards
    } = this.props;

    const {activeTabIndex, isPlayerShown} = this.state;

    const ActiveTabComponent = this.tabs[activeTabIndex].component;

    const currentCard = movieCards.find((card) => card.id === currentVideoID);

    const filteredCards = movieCards
      .filter((card) => {
        return card.genre === currentCard.genre;
      });

    if (isPlayerShown) {
      return (
        <WithControls
          src={currentCard.src}
          poster={currentCard.posterSrc}
          isPlaying={true}
          movieTitle={currentCard.title}
          onExitButtonClick={this._handleHidePlayer}
        />
      );
    }

    return (
      <React.Fragment>
        <Sprite />
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={currentCard.imgSrc} alt={currentCard.imgDescription}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header avatar={userData.avatar} />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{currentCard.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{currentCard.genre}</span>
                  <span className="movie-card__year">{currentCard.year}</span>
                </p>

                <MovieCardButtons
                  onPlayButtonClick={this._handleShowPlayer}
                />
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={currentCard.posterSrc} alt={currentCard.imgDescription} width="218"
                  height="327"/>
              </div>

              <div className="movie-card__desc">

                <CardNavigation
                  activeTab={this.tabs[activeTabIndex].title}
                  tabs={this.tabs.map((tab) => tab.title)}
                  onTabChange={this._handleTabChange}
                />

                <MovieRating
                  rating={currentCard.rating}
                  scores={currentCard.ratingCount}
                />

                <ActiveTabComponent
                  card={currentCard}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <CatalogWrapped
              maxCatalogCards={maxCatalogCards}
              movieCards={filteredCards}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
  currentVideoID: PropTypes.number,
  maxCatalogCards: PropTypes.number,
  movieCards: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  })
};

export {MoviePage};
