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
  genre: PropTypes.string,
  year: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.shape({
    score: PropTypes.string,
    level: PropTypes.string,
    count: PropTypes.number
  })
});

export {
  movieCardPropTypes
};
