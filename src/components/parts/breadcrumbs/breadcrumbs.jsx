import * as React from 'react';
import {Link} from 'react-router-dom';

import {Url} from './../../../constants/constants.js';
import {movieCardPropTypes} from './../../../global-custom-types.js';

const Breadcrumbs = (props) => {
  const {activeCard} = props;
  const {id, name} = activeCard;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${Url.FILM}/${id}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  activeCard: movieCardPropTypes
};

Breadcrumbs.defaultProps = {
  activeCard: {}
};

export {Breadcrumbs};
