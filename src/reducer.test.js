import {
  initialState,
  ActionType,
  ActionCreator,
  reducer
} from './reducer';

describe(`Action creator works correctly`, () => {
  it(`should return correct action when genre change action is called`, () => {
    expect(ActionCreator.changeGenre(`comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    });
  });

  it(`should return correct action when video id change action is called`, () => {
    expect(ActionCreator.changeCurrentVideoID(2)).toEqual({
      type: ActionType.CHANGE_CURRENT_VIDEO_ID,
      payload: 2,
    });
  });

  // it(`should return correct action when filter by genre action is called`, () => {
  //   const movieCards = [{
  //     genre: `comedy`
  //   }, {
  //     genre: `Dramas`
  //   }];
  //
  //   expect(ActionCreator.filterMoviesByGenre(`comedy`, movieCards)).toEqual({
  //     type: ActionType.FILTER_MOVIES_BY_GENRE,
  //     payload: [{
  //       genre: `comedy`
  //     }],
  //   });
  // });
});

describe(`Reducer works correctly`, () => {
  it(`should return initial state when no additional parameters provided`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should change stored genre`, () => {
    const state = {
      currentVideoID: 0,
      genre: `comedy`,
      movieCards: [{
        genre: `comedy`
      }, {
        genre: `Dramas`
      }]
    };

    expect(reducer(state, ActionCreator.changeGenre(`some genre`)))
      .toEqual(Object.assign({}, state, {
        genre: `some genre`
      }));
  });

  it(`should change stored currentVideoID`, () => {
    const state = {
      currentVideoID: 0,
      genre: `comedy`,
      movieCards: [{
        genre: `comedy`
      }, {
        genre: `Dramas`
      }]
    };

    expect(reducer(state, ActionCreator.changeCurrentVideoID(99)))
      .toEqual(Object.assign({}, state, {
        currentVideoID: 99
      }));
  });

  // it(`should return correctly filtered by genre movie cards when genre provided`, () => {
  //   const state = {
  //     genre: `comedy`,
  //     movieCards: [{
  //       genre: `comedy`
  //     }, {
  //       genre: `Dramas`
  //     }]
  //   };
  //
  //   expect(reducer(state, ActionCreator.filterMoviesByGenre(`comedy`, state.movieCards))).toEqual({
  //     genre: `comedy`,
  //     movieCards: [{
  //       genre: `comedy`
  //     }]
  //   });
  // });
});
