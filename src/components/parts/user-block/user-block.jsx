import * as React from 'react';
import PropTypes from 'prop-types';

const UserBlock = (props) => {
  const {userData} = props;
  const {avatar} = userData;

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src={avatar} alt="User avatar" width="63" height="63"/>
      </div>
    </div>
  );
};

UserBlock.propTypes = {
  userData: PropTypes.shape({
    avatar: PropTypes.string
  })
};

UserBlock.defaultProps = {
  userData: {
    avatar: ``
  }
};

export {UserBlock};
