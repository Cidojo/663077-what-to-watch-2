import * as React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (props) => {
  const {name, viewBox, width, height} = props;

  return (
    <svg viewBox={viewBox} width={width} height={height}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

SvgIcon.defaultProps = {
  name: ``,
  viewBox: `0 0 0 0`,
  width: 0,
  height: 0
};

export {SvgIcon};
