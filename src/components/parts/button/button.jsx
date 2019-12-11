import * as React from 'react';
import * as PropTypes from 'prop-types';

import {SvgIcon} from './../svg-icon/svg-icon.jsx';
import {IconProps} from '../../../constants/constants.js';

const Button = (props) => {
  const {type, className, onClick, icon, children} = props;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {icon && <SvgIcon {...IconProps[icon]} />}
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: `button`,
  className: ``,
  onClick: () => {}
};

export {Button};
