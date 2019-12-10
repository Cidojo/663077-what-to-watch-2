import axios from 'axios';

import {AuthActionCreator} from './../reducers/auth-reducer/auth-reducer.js';
import {Url} from './../constants/constants.js';

const createAPI = (dispatch, history) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onError = (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      history.push(Url.LOGIN);
      dispatch(AuthActionCreator.resetUser());
    }

    return err;
  };

  api.interceptors.request.use(onSuccess, onError);

  return api;
};

export default createAPI;
