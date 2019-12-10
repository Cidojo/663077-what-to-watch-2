import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Selectors from './../../../selectors/selectors.js';
import {Url} from './../../../constants/constants.js';

const UserBlock = (props) => {
  const {userData} = props;

  const {avatarUrl, name} = userData;

  return (
    <div className="user-block">
      {Object.keys(userData).length > 0 ?
        <div className="user-block__avatar">
          <Link to={Url.MY_LIST}>
            <img src={`${/.*(?=\/wtw$)/.exec(Url.BASE)[0]}${avatarUrl}`} alt={name} width="63" height="63"/>
          </Link>
        </div> :
        <Link to={Url.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  userData: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string
  })
};

UserBlock.defaultProps = {
  userData: {}
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    userData: Selectors.getUserData(state)
  });
};

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
