import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Logo} from './../logo/logo.jsx';
import {UserBlock} from './../user-block/user-block.jsx';

const Header = (props) => {
  const {extraClassName, title, isWithUserBlock} = props;
  return (
    <header className={`page-header ${extraClassName}`}>
      <Logo/>

      {title && <h1 className="page-title user-page__title">{title}</h1>}

      {isWithUserBlock && <UserBlock/>}
    </header>
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
