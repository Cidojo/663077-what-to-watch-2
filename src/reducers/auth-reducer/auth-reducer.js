import AuthActionType from './../../actions/auth-actions/auth-actions.js';
import {adaptUserData} from './../../utils/adapter.js';

const initialState = {
  isAuthorizationRequired: false,
  userData: {}
};

const ActionCreator = {
  requiredAuthorization: (status) => ({
    type: AuthActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  assignUser: (userData) => ({
    type: AuthActionType.ASSIGN_USER,
    payload: userData
  }),
  resetUser: () => ({
    type: AuthActionType.RESET_USER
  })
};

const Operation = {
  authorize: (authData) => (dispatch, _, api) => {
    return api.post(`/login`, authData)
      .then((response) => {
        dispatch(ActionCreator.assignUser(adaptUserData(response.data)));
        return response.data;
      })
      .catch((err) => void err);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.REQUIRED_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case AuthActionType.ASSIGN_USER: return Object.assign({}, state, {
      userData: action.payload
    });
    case AuthActionType.RESET_USER: return Object.assign({}, state, {
      userData: initialState.userData
    });
  }

  return state;
};

export {ActionCreator as AuthActionCreator, Operation as AuthOperation};
export default reducer;
