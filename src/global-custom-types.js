import * as PropTypes from 'prop-types';

const movieCardPropTypes = PropTypes.exact({
  id: PropTypes.number || PropTypes.string,
  imgSrc: PropTypes.string,
  posterSrc: PropTypes.string,
  imgDescription: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number || PropTypes.string
});

const genresPropTypes = PropTypes.shape({
  [PropTypes.string]: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  })
});

const movieCardsPropTypes = PropTypes.arrayOf(movieCardPropTypes);

const userDataPropTypes = PropTypes.shape({
  avatar: PropTypes.string
});

const currentVideoIDPropTypes = PropTypes.number || PropTypes.string;

const cardsPerPagePropTypes = PropTypes.number;

export {
  movieCardPropTypes,
  genresPropTypes,
  movieCardsPropTypes,
  userDataPropTypes,
  currentVideoIDPropTypes,
  cardsPerPagePropTypes
};
