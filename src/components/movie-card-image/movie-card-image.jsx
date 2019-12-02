import * as React from 'react';
import PropTypes from 'prop-types';

const MovieCardImage = (props) => {
  return (
    <div className="small-movie-card__image">
      {props.renderVideo()}
    </div>
  );
};

MovieCardImage.propTypes = {
  renderVideo: PropTypes.func.isRequired
};

MovieCardImage.defaultProps = {
  renderVideo: () => {}
};

export {MovieCardImage};
