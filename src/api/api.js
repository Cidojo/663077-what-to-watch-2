import axios from 'axios';

import {AuthActionCreator} from './../reducers/auth-reducer/auth-reducer.js';
import {Url} from './../constants/constants.js';

const TIMEOUT = 5000;

const createAPI = (dispatch, history) => {
  const api = axios.create({
    baseURL: Url.BASE,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onError = (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      history.push(Url.LOGIN);
      dispatch(AuthActionCreator.resetUser());
    } else if (err.response.status === 400) {
      throw new Error(`SERVER ERROR: ${err.response.data.error}`);
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
