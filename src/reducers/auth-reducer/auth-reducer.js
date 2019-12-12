import AuthActionType from './../../actions/auth-actions/auth-actions.js';
import {adaptUserData} from './../../utils/adapter.js';
import {Url} from './../../constants/constants.js';

const initialState = {
  userData: {}
};

const ActionCreator = {
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
    return api.post(Url.LOGIN, authData)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.assignUser(adaptUserData(response.data)));
        }

        return response;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.ASSIGN_USER: return Object.assign({}, state, {
      userData: action.payload
    });
    case AuthActionType.RESET_USER: return Object.assign({}, state, {
      userData: initialState.userData
    });
  }

  return state;
};

export {ActionCreator as AuthActionCreator, Operation as AuthOperation, initialState as AuthInitialState};
export default reducer;
