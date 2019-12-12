import {MAX_CATALOG_CARDS} from './../../constants/constants.js';

import DisplayCountActionType from './../../actions/display-count-actions/display-count-actions.js';

const initialState = {
  displayCount: MAX_CATALOG_CARDS
};

const ActionCreator = {
  setCount: (count) => ({
    type: DisplayCountActionType.SET_COUNT,
    payload: count
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DisplayCountActionType.SET_COUNT: return Object.assign({}, state, {
      displayCount: action.payload
    });
  }

  return state;
};

export {ActionCreator as DisplayCountActionCreator, initialState as DisplayCountInitialState};
export default reducer;
