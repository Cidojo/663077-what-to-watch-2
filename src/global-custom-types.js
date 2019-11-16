import * as PropTypes from 'prop-types';

const movieCardPropTypes = PropTypes.exact({
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  src: PropTypes.string,
  imgSrc: PropTypes.string,
  posterSrc: PropTypes.string,
  imgDescription: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  isFavorite: PropTypes.bool,
  previewSrc: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  runTime: PropTypes.number
});

export {
  movieCardPropTypes
};
