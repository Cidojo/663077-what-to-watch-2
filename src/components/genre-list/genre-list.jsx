import * as React from 'react';
import * as PropTypes from 'prop-types';
import {GenreItem} from './../genre-item/genre-item.jsx';

const GenreList = (props) => {
  const {
    currentGenre,
    genres,
    maxGenresToDisplay,
    onGenreTabClick
  } = props;

  return (
    <ul className="catalog__genres-list">
      <GenreItem
        currentGenre={currentGenre}
        genre={`All genres`}
        onGenreTabClick={onGenreTabClick}
      />
      {
        genres.slice(maxGenresToDisplay).map((genre) => {
          return (
            <GenreItem
              key={genre}
              currentGenre={currentGenre}
              genre={genre}
              onGenreTabClick={onGenreTabClick}
            />
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  currentGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  maxGenresToDisplay: PropTypes.number,
  onGenreTabClick: PropTypes.func.isRequired,
};

export {GenreList};
