import * as React from 'react';
import * as PropTypes from 'prop-types';

const GenreItem = (props) => {
  const {
    currentGenre,
    genre,
    onGenreTabClick
  } = props;

  const handleGenreTabClick = (e) => {
    e.preventDefault();

    onGenreTabClick(e.currentTarget.textContent);
  };

  return (
    <li
      className={`catalog__genres-item${currentGenre === genre ? ` catalog__genres-item--active` : ``}`}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={handleGenreTabClick}
      >
        {genre}
      </a>
    </li>
  );
};

GenreItem.propTypes = {
  currentGenre: PropTypes.string,
  genre: PropTypes.string,
  onGenreTabClick: PropTypes.func.isRequired,
};

export {GenreItem};
