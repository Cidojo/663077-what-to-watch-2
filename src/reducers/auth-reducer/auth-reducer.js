import AuthActionType from './../../actions/auth-actions/auth-actions.js';

const initialState = {
  isAuthorizationRequired: false,
  userData: {}
};

const ActionCreator = {
  requireAuth: () => ({
    type: AuthActionType.REQUIRE,
    payload: true
  }),
  disableAuth: () => ({
    type: AuthActionType.DISABLE,
    payload: false
  }),
  assignUser: (userData) => ({
    type: AuthActionType.ASSIGN_USER,
    payload: userData
  })
};

const Operation = {
  authorize: (authData) => (dispatch, _, api) => {
    return api.post(`/login`, authData)
      .then((response) => {
        dispatch(ActionCreator.assignUser(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.REQUIRE: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case AuthActionType.DISABLE: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case AuthActionType.ASSIGN_USER: return Object.assign({}, state, {
      userData: action.payload
    });
  }

  return state;
};

export {ActionCreator as AuthActionCreator, Operation as AuthOperation};
export default reducer;
