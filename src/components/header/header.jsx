import * as React from 'react';
import {userDataPropTypes} from "./../../global-custom-types.jsx";


const Header = (props) => {
  const {userData} = props;
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src={userData.avatar} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userData: userDataPropTypes
};

export {Header};