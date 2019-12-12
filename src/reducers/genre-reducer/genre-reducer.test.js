import GenreActionType from './../../actions/genre-actions/genre-actions.js';
import reducer, {GenreInitialState, GenreActionCreator} from './genre-reducer';

describe(`Action creators work correctly`, () => {
  it(`Action creator for assigning genre is called with provided genre`, () => {
    expect(GenreActionCreator.assignGenre(`fancy genre`)).toEqual({
      type: GenreActionType.ASSIGN_GENRE,
      payload: `fancy genre`,
    });
  });
});

describe(`Genre reducer works correctly`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(GenreInitialState);
  });

  it(`should assign provided display count on SET_COUNT action`, () => {
    const action = {
      type: GenreActionType.ASSIGN_GENRE,
      payload: `some fancy genre`,
    };

    expect(reducer(GenreInitialState, action)).toEqual(
        Object.assign({}, GenreInitialState, {
          genre: `some fancy genre`
        }));
  });
});
