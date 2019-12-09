import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Logo} from './../logo/logo.jsx';
import {UserBlock} from './../user-block/user-block.jsx';

const Breadcrumbs = (props) => {
  const {extraClassName, title, isWithUserBlock} = props;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  extraClassName: PropTypes.string,
  title: PropTypes.string,
  isWithUserBlock: PropTypes.bool
};

Header.defaultProps = {
  extraClassName: `movie-card__head`,
  title: ``,
  isWithUserBlock: false
};

export {Header};
