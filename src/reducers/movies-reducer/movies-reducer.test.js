import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api/api.js';
import MoviesActionType from './../../actions/movie-actions/movie-actions.js';
import reducer, {MoviesInitialState, MoviesOperation, MoviesActionCreator} from './movies-reducer';

const cardFake = {
  id: 1,
  videoLink: `test.jpg`,
  isFavorite: false,
  starring: [`some`, `actor`]
};

describe(`Operations should work correctly`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);

  it(`Should make a correct API call to /films`, function () {

    const moviesLoader = MoviesOperation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: MoviesActionType.SET_MOVIES,
          payload: [{fake: true}]
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {

    const promoLoader = MoviesOperation.loadPromoMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, {fake: true});

    return promoLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: MoviesActionType.ASSIGN_PROMO_CARD,
          payload: {fake: true}
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status`, function () {

    const favoritePoster = MoviesOperation.addToFavorite(1, 1);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, {fake: true});

    return favoritePoster(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: MoviesActionType.REPLACE_CARD,
          payload: {fake: true}
        });
      });
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator on SET_MOVIES is called with provided payload`, () => {
    expect(MoviesActionCreator.setMovies([cardFake])).toEqual({
      type: MoviesActionType.SET_MOVIES,
      payload: [cardFake]
    });
  });

  it(`Action creator on ASSIGN_PROMO_CARD is called with provided payload`, () => {
    expect(MoviesActionCreator.assignPromoCard(cardFake)).toEqual({
      type: MoviesActionType.ASSIGN_PROMO_CARD,
      payload: cardFake,
    });
  });

  it(`Action creator on REPLACE_CARD is called with provided payload`, () => {
    expect(MoviesActionCreator.replaceCard(cardFake)).toEqual({
      type: MoviesActionType.REPLACE_CARD,
      payload: cardFake
    });
  });
});


describe(`Movies reducer works correctly`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(MoviesInitialState);
  });

  it(`should set received movies to store`, () => {
    const action = {
      type: MoviesActionType.SET_MOVIES,
      payload: [{fake: `movie`}, {evenFaker: `movie`}]
    };

    expect(reducer(MoviesInitialState, action)).toEqual(
        Object.assign({}, MoviesInitialState, {
          movieCards: [{fake: `movie`}, {evenFaker: `movie`}]
        }));
  });

  it(`should set promo card to store`, () => {
    const action = {
      type: MoviesActionType.ASSIGN_PROMO_CARD,
      payload: {fake: `true`}
    };

    expect(reducer(MoviesInitialState, action)).toEqual(
        Object.assign({}, MoviesInitialState, {
          promoCard: {fake: `true`}
        }));
  });

  it(`should replace updated card in store`, () => {
    const action = {
      type: MoviesActionType.REPLACE_CARD,
      payload: {id: 1, name: `updated`}
    };

    const activeState = Object.assign({}, MoviesInitialState, {
      movieCards: [{id: 1, name: `updated`}]
    });

    expect(reducer(activeState, action)).toEqual(
        Object.assign({}, activeState, {
          movieCards: [{id: 1, name: `updated`}]
        }));
  });
});
