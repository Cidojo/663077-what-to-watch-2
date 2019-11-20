import * as React from 'react';
import * as PropTypes from 'prop-types';
import {GenreItem} from './../genre-item/genre-item.jsx';

const GenreList = (props) => {
  const {
    active,
    genres,
    maxGenresToDisplay,
    onActiveChange
  } = props;

  const _handleActiveChange = (genre) => {
    onActiveChange(genre === genres.all ? null : genre);
  };

  return (
    <ul className="catalog__genres-list">
      <GenreItem
        isActive={!active}
        genre={genres.all}
        onGenreTabClick={_handleActiveChange}
      />
      {
        genres.rest.slice(0, maxGenresToDisplay).map((genre) => {
          return (
            <GenreItem
              key={genre}
              isActive={active === genre}
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
  genres: PropTypes.shape({
    all: PropTypes.string,
    rest: PropTypes.arrayOf(PropTypes.string)
  }),
  maxGenresToDisplay: PropTypes.number,
  onActiveChange: PropTypes.func.isRequired,
};

GenreList.defaultProps = {
  active: null,
  genres: {
    all: ``,
    rest: []
  },
  maxGenresToDisplay: 0,
  onActiveChange: () => {}
};

export {GenreList};
