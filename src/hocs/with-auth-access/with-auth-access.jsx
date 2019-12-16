import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

import {Url} from './../../constants/constants.js';
import Selectors from './../../selectors/selectors.js';

const withAuthAccess = (Component) => {
  const WithAuthAccess = (props) => {
    const {isAuthorized} = props;

    if (!isAuthorized) {
      return <Redirect to={Url.LOGIN} />;
    }

    return <Component {...props}/>;
  };

  WithAuthAccess.propTypes = {
    isAuthorized: PropTypes.bool,
  };

  WithAuthAccess.defaultProps = {
    isAuthorized: false,
  };

  return WithAuthAccess;
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    isAuthorized: Selectors.getAuthStatus(state)
  });
};

export {withAuthAccess};
export default compose(connect(mapStateToProps), withAuthAccess);
