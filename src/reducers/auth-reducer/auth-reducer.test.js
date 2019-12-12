import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api/api.js';
import AuthActionType from './../../actions/auth-actions/auth-actions.js';
import reducer, {AuthInitialState, AuthOperation, AuthActionCreator} from './auth-reducer';

const userData = {
  id: 1,
  avatarUrl: `test.jpg`,
  email: `some@email.com`,
  name: `test`,
};

describe(`Operations should work correctly`, () => {
  it(`Should make a correct API call to /login`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorizer = AuthOperation.authorize();

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return authorizer(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AuthActionType.ASSIGN_USER,
          payload: {fake: true},
        });
      });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for assigning user is called with correct payload`, () => {
    expect(AuthActionCreator.assignUser({fake: `user`})).toEqual({
      type: AuthActionType.ASSIGN_USER,
      payload: {fake: `user`},
    });
  });
  it(`Action creator for reseting user is called without payload`, () => {
    expect(AuthActionCreator.resetUser({fake: `user`})).toEqual({
      type: AuthActionType.RESET_USER,
      payload: undefined,
    });
  });
});

describe(`Authorization reducer works correctly`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(AuthInitialState);
  });

  it(`should assign user to store on ASSIGN_USER action`, () => {
    const action = {
      type: AuthActionType.ASSIGN_USER,
      payload: userData,
    };

    expect(reducer(AuthInitialState, action)).toEqual(
        Object.assign({}, AuthInitialState, {
          userData
        }));
  });

  it(`should set initial state for userData to store on RESET_USER action`, () => {
    const action = {
      type: AuthActionType.RESET_USER,
    };

    expect(reducer(AuthInitialState, action)).toEqual(
        Object.assign({}, AuthInitialState, {
          userData: AuthInitialState.userData
        }));
  });
});
