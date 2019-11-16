import {reducer, initialState} from './reducer';

describe(`Reducer works correctly`, () => {
  it(`should return initial state when no additional parameters provided`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it(`should return correctly filtered by genre movie cards when genre provided`, () => {
    expect(reducer({
      allMovies: [{
        genre: `Drama`
      }, {
        genre: `Comedy`
      }],
      genre: `All Genres`,
      movieCards: [{
        genre: `Drama`
      }, {
        genre: `Comedy`
      }]
    }, {
      type: `FILTER_BY_GENRE`,
      payload: `Comedy`
    })).toEqual({
      allMovies: [{
        genre: `Drama`
      }, {
        genre: `Comedy`
      }],
      genre: `Comedy`,
      movieCards: [{
        genre: `Comedy`
      }]
    });
  });
});
