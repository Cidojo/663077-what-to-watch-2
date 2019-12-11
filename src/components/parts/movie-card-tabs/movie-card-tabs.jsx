import * as React from 'react';
import * as PropTypes from 'prop-types';

import {MovieTab} from '../../../constants/constants.js';
import {TabOverview} from './../tab-overview/tab-overview.jsx';
import {TabDetails} from './../tab-details/tab-details.jsx';
import {TabReviews} from './../tab-reviews/tab-reviews.jsx';

import withActiveItem from './../../../hocs/with-active-item/with-active-item.jsx';

const MovieCardTabs = (props) => {
  const {active, onActiveChange, movie, reviews} = props;

  const {
    genre,
    description,
    released,
    rating,
    scoresCount,
    runTime,
    director,
    starring
  } = movie;

  const _handleTabClick = (e) => {
    e.preventDefault();
    onActiveChange(e.currentTarget.textContent.trim());
  };

  const renderTabs = () => {
    switch (active) {
      case MovieTab.OVERVIEW:
        return (
          <TabOverview
            director={director}
            starring={starring}
            description={description}
            rating={rating}
            scoresCount={scoresCount}
          />);
      case MovieTab.DETAILS:
        return (
          <TabDetails
            director={director}
            starring={starring}
            runTime={runTime}
            released={released}
            genre={genre}
          />);
      case MovieTab.REVIEWS:
        return (
          <TabReviews reviews={reviews}/>
        );
    }

    return null;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.entries(MovieTab).map(([tabKey, tab]) => {
            return (
              <li key={tabKey} className={`movie-nav__item${tab === active ? ` movie-nav__item--active` : ``}`}>
                <a onClick={_handleTabClick} href='#' className="movie-nav__link">
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {renderTabs()}
    </div>
  );
};

MovieCardTabs.propTypes = {
  active: PropTypes.string.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    genre: PropTypes.string,
    description: PropTypes.string,
    released: PropTypes.number,
    rating: PropTypes.number,
    runTime: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    scoresCount: PropTypes.number,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    rating: PropTypes.number,
    comment: PropTypes.string
  }))
};

MovieCardTabs.defaultProps = {
  active: MovieTab.OVERVIEW,
  onActiveChange: () => {},
  movie: {},
  reviews: []
};

export {MovieCardTabs};
export default withActiveItem(MovieCardTabs, MovieTab.OVERVIEW);
