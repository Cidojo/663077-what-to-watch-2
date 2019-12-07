import * as React from 'react';
import PropType from 'prop-types';

import {CardNavigation} from './card-navigation/card-navigation.jsx';
import {MovieRating} from './movie-rating/movie-rating.jsx';
import {MovieCardOverview} from './movie-card-overview/movie-card-overview.jsx';
import {MovieCardDetails} from './movie-card-details/movie-card-details.jsx';
import {MovieCardReviews} from './movie-card-reviews/movie-card-reviews.jsx';

import {movieCardPropTypes} from './../../../global-custom-types.js';

const Tabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const TabComponents = {
  [Tabs.OVERVIEW]: MovieCardOverview,
  [Tabs.DETAILS]: MovieCardDetails,
  [Tabs.REVIEWS]: MovieCardReviews
};

const MovieCardTabs = (props) => {
  const {card, activeTab, onActiveChange} = props;

  const ActiveComponent = TabComponents[activeTab];

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={card.posterImage} alt={card.name} width="218" height="327"/>
        </div>
        <div className="movie-card__desc">
          <CardNavigation
            activeTab={activeTab}
            tabs={Tabs}
            onTabChange={onActiveChange}
          />
          <MovieRating
            rating={card.rating}
            scores={card.scoresCount}
          />
          <ActiveComponent card={card} />
        </div>
      </div>
    </div>
  );
};

MovieCardTabs.propTypes = {
  card: movieCardPropTypes,
  activeTab: PropType.string,
  onActiveChange: PropType.func.isRequired
};

MovieCardTabs.defaultProps = {
  activeTab: `Overview`,
  onActiveChange: () => {}
};

export {MovieCardTabs};
