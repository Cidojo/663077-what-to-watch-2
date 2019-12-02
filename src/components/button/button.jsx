import * as React from 'react';
import PropTypes from 'prop-types';
import {SvgIcon} from './../svg-icon/svg-icon.jsx';
import {Icons} from './../../constants.js';

const Button = (props) => {
  const renderIcon = (iconName) => {
    return (
      <SvgIcon {...Icons[iconName]} />
    );
  };

  const {type, className, onClick, icon, buttonText} = props;

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {icon && renderIcon(icon)}
      <span>{buttonText}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: `button`,
  className: ``,
  buttonText: ``,
  onClick: () => {}
};

export {Button};
