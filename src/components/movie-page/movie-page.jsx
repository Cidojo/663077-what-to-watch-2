import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Logotype} from './../logotype/logotype.jsx';
import {MovieCardButtons} from '../movie-card-buttons/movie-card-buttons.jsx';
import {Catalog} from '../catalog/catalog.jsx';
import {Header} from '../header/header.jsx';
import {CardNavigation} from '../card-navigation/card-navigation.jsx';
import {movieCardPropTypes} from './../../global-custom-types';
import {MovieRating} from './../movie-rating/movie-rating.jsx';
import {MovieCardOverview} from './../movie-card-overview/movie-card-overview.jsx';
import {MovieCardDetails} from './../movie-card-details/movie-card-details.jsx';
import {MovieCardReviews} from './../movie-card-reviews/movie-card-reviews.jsx';

const MAX_CATALOG_CARDS = 4;
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
      activeTabIndex: DEFAULT_TAB_INDEX
    };

    this._handleTabChange = this._handleTabChange.bind(this);
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
    const {currentCard, moviesLikeThis, onCurrentVideoIDChange} = this.props;
    const {activeTabIndex} = this.state;
    const ActiveTabComponent = this.tabs[activeTabIndex].component;

    return (
      <React.Fragment>
        <Logotype />
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={currentCard.imgSrc} alt={currentCard.imgDescription}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header avatar={``} />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{currentCard.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{currentCard.genre}</span>
                  <span className="movie-card__year">{currentCard.year}</span>
                </p>

                <MovieCardButtons/>
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

                <ActiveTabComponent card={currentCard} />
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <Catalog
              max={MAX_CATALOG_CARDS}
              movieCards={moviesLikeThis}
              onCurrentVideoIDChange={onCurrentVideoIDChange}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
  moviesLikeThis: PropTypes.arrayOf(movieCardPropTypes),
  userData: PropTypes.shape({
    avatar: PropTypes.string
  }),
  currentCard: movieCardPropTypes,
  onCurrentVideoIDChange: PropTypes.func,
};

export {MoviePage};
