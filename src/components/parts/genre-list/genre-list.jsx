import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {GenreItem} from './../genre-item/genre-item.jsx';

import {GenreActionCreator} from './../../../reducers/genre-reducer/genre-reducer.js';
import {DisplayCountActionCreator} from './../../../reducers/display-count-reducer/display-count-reducer.js';
import Selectors from './../../../selectors/selectors.js';
import {SHOW_MORE_STEP} from './../../../constants/constants.js';

const GenreList = (props) => {
  const {
    activeGenre,
    genres,
    onGenreChange
  } = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
          return (
            <GenreItem
              key={genre}
              isActive={activeGenre === genre}
              genre={genre}
              onGenreTabClick={onGenreChange}
            />
          );
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  onGenreChange: PropTypes.func.isRequired,
};

GenreList.defaultProps = {
  activeGenre: ``,
  genres: [],
  onGenreChange: () => {}
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(GenreActionCreator.assignGenre(genre));
    dispatch(DisplayCountActionCreator.setCount(SHOW_MORE_STEP));
  }
});

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeGenre: Selectors.getGenre(state),
    genres: Selectors.getGenresList(state)
  });
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
