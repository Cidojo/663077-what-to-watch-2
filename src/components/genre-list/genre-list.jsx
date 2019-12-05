import * as React from 'react';
import * as PropTypes from 'prop-types';
import {GenreItem} from './../genre-item/genre-item.jsx';

const GenreList = (props) => {
  const {
    active,
    genres,
    onActiveChange
  } = props;

  const _handleActiveChange = (genre) => {
    onActiveChange(genre === (genres[0] || null) ? `All genres` : genre);
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
          return (
            <GenreItem
              key={genre}
              isActive={active === genre || (active === null && genre === `All genres`)}
              genre={genre}
              onGenreTabClick={_handleActiveChange}
            />
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  active: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  onActiveChange: PropTypes.func.isRequired,
};

GenreList.defaultProps = {
  active: null,
  genres: [],
  onActiveChange: () => {}
};

export {GenreList};
