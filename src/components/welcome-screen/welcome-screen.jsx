import * as React from 'react';
import * as PropTypes from 'prop-types';

export const WelcomeScreen = (props) => {
  return (
    <div>{ props.welcomeMessage || `` }</div>
  );
};

// linter ругается на типы, добавил пакет с prop-types

WelcomeScreen.propTypes = {
  welcomeMessage: PropTypes.string
};
