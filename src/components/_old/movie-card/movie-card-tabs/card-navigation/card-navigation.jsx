import * as React from 'react';
import * as PropTypes from 'prop-types';

const CardNavigation = (props) => {
  const {activeTab, onTabChange, tabs} = props;

  const _handleTabChange = (e) => {
    e.preventDefault();

    onTabChange(e.currentTarget.textContent.trim());
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.keys(tabs).map((tabKey) => {
          return (
            <li key={tabKey} className={`movie-nav__item${tabKey === activeTab ? ` movie-nav__item--active` : ``}`}>
              <a onClick={_handleTabChange} href='#' className="movie-nav__link">
                {tabs[tabKey]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

CardNavigation.propTypes = {
  activeTab: PropTypes.string,
  tabs: PropTypes.shape({
    OVERVIEW: PropTypes.string,
    DETAILS: PropTypes.string,
    REVIEWS: PropTypes.string,
  }),
  onTabChange: PropTypes.func.isRequired,
};

export {CardNavigation};
