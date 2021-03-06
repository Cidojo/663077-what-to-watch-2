import * as React from 'react';
import * as PropTypes from 'prop-types';

const ShowMoreButton = (props) => {
  const {onButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};

ShowMoreButton.defaultProps = {
  onButtonClick: () => {}
};

export {ShowMoreButton};
