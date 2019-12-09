import {MAX_CATALOG_CARDS} from './../../constants/constants.js';

import DisplayCountActionType from './../../actions/display-count-actions/display-count-actions.js';
import {SHOW_MORE_STEP} from "./../../constants/constants";

const initialState = {
  displayCount: MAX_CATALOG_CARDS
};

const ActionCreator = {
  incrementCount: (count) => ({
    type: DisplayCountActionType.INCREMENT_COUNT,
    payload: count
  }),
  resetCount: () => ({
    type: DisplayCountActionType.RESET_COUNT,
    payload: SHOW_MORE_STEP
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DisplayCountActionType.INCREMENT_COUNT: return Object.assign({}, state, {
      displayCount: action.payload
    });
    case DisplayCountActionType.RESET_COUNT: return Object.assign({}, state, {
      displayCount: action.payload
    });
  }

  return state;
};

export {ActionCreator as DisplayCountActionCreator};
export default reducer;
