import axios from 'axios';

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onError = (err) => {
    if (err.response.status === 403) {
      // return dispatch(ActionCreator.requireAuthorization());
    }

    return err;
  };

  api.interceptors.request.use(onSuccess, onError);

  return api;
};

export default createAPI;
