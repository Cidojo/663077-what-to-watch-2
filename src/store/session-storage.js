import NameSpace from './../reducers/name-spaces.js';
import {AuthInitialState} from './../reducers/auth-reducer/auth-reducer.js';

const AUTH_STATE_SESSION_KEY = `authState`;

const restoreUserDataState = () => {
  try {
    const userDataState = JSON.parse(window.sessionStorage.getItem(AUTH_STATE_SESSION_KEY));
    return userDataState || AuthInitialState.userData;
  } catch (err) {
    throw new Error(`${err} on restoreUser`);
  }
};

const cacheUserDataState = (store) => {
  try {
    window.sessionStorage.setItem(AUTH_STATE_SESSION_KEY, JSON.stringify(store.getState()[NameSpace.AUTH].userData));
  } catch (err) {
    throw new Error(`${err} on cache user`);
  }
};

export {restoreUserDataState, cacheUserDataState};
