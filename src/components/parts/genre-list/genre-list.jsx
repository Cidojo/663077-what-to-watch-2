import * as React from 'react';
import * as PropTypes from 'prop-types';

import {GenreItem} from './../genre-item/genre-item.jsx';
import withActiveItem from './../../../hocs/with-active-item/with-active-item.jsx';

const GenreList = (props) => {
  const {
    active,
    genres,
    onActiveChange
  } = props;

  const _handleActiveChange = (genre) => {
    onActiveChange(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
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
  genres: PropTypes.arrayOf(PropTypes.string),
  onActiveChange: PropTypes.func.isRequired,
};

GenreList.defaultProps = {
  active: `All genres`,
  genres: [],
  onActiveChange: () => {}
};

export {GenreList};
export default withActiveItem(GenreList, `All genres`);
