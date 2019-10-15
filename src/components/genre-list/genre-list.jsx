import * as React from 'react';
import {genresPropTypes} from "./../../global-custom-types.jsx";

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
  genresDictionary: genresPropTypes
};

export {GenreList};
