import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Url} from './../../../constants/constants.js';

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
  activeCard: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

Breadcrumbs.defaultProps = {
  activeCard: {
    id: 0,
    name: ``
  }
};

export {Breadcrumbs};
