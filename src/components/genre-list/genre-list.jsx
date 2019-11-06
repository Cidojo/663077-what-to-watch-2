import * as React from 'react';
import * as PropTypes from "prop-types";

const GenreList = (props) => {
  const {genresDictionary} = props;

  return (
    <ul className="catalog__genres-list">
      {
        Object.keys(genresDictionary).map((key, i) => {
          return (
            <li key={`${key}_${i}`} className="catalog__genres-item catalog__genres-item--active">
              <a href={genresDictionary[key].href} className="catalog__genres-link">{genresDictionary[key].name}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  genresDictionary: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })
  })
};

export {GenreList};
