import DisplayCountActionType from './../../actions/display-count-actions/display-count-actions.js';
import reducer, {DisplayCountInitialState, DisplayCountActionCreator} from './display-count-reducer';

describe(`Action creators work correctly`, () => {
  it(`Action creator for increment count is called with provided payload`, () => {
    expect(DisplayCountActionCreator.setCount(2)).toEqual({
      type: DisplayCountActionType.SET_COUNT,
      payload: 2,
    });
  });
});

describe(`DisplayCount reducer works correctly`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(DisplayCountInitialState);
  });

  it(`should assign provided display count on SET_COUNT action`, () => {
    const action = {
      type: DisplayCountActionType.SET_COUNT,
      payload: 200,
    };

    expect(reducer(DisplayCountInitialState, action)).toEqual(
        Object.assign({}, DisplayCountInitialState, {
          displayCount: 200
        }));
  });
});
