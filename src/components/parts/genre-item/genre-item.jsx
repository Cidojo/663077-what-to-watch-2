import * as React from 'react';
import * as PropTypes from 'prop-types';

const GenreItem = (props) => {
  const {
    isActive,
    genre,
    onGenreTabClick
  } = props;

  const handleGenreTabClick = (e) => {
    e.preventDefault();

    onGenreTabClick(e.currentTarget.textContent.trim());
  };

  return (
    <li className={`catalog__genres-item${isActive ? ` catalog__genres-item--active` : ``}`} >
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
  isActive: PropTypes.bool,
  genre: PropTypes.string,
  onGenreTabClick: PropTypes.func.isRequired,
};

GenreItem.defaultProps = {
  isActive: false,
  genre: ``,
  onGenreTabClick: () => {}
};

export {GenreItem};
