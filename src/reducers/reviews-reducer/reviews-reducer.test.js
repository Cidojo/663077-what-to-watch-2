import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api/api.js';
import ReviewsActionType from './../../actions/reviews-actions/reviews-actions.js';
import reducer, {ReviewsInitialState, ReviewsOperation, ReviewsActionCreator} from './reviews-reducer.js';

const review = {
  id: 1,
  comment: `some comment`,
  user: {
    id: 1,
    name: `user`
  },
  date: `2020`
};

describe(`Operations should work correctly`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);


  it(`Should make a correct POST API call to /comments/:id`, function () {

    const reviewPoster = ReviewsOperation.postReview({review: `some`}, 1);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{review: `some`}]);

    return reviewPoster(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ReviewsActionType.SET_REVIEWS,
          payload: [{review: `some`}]
        });
      });
  });

  it(`Should make a correct GET API call to /comments:id`, function () {

    const reviewPoster = ReviewsOperation.loadReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{review: `some`}]);

    return reviewPoster(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ReviewsActionType.SET_REVIEWS,
          payload: [{review: `some`}]
        });
      });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting reviews is called with correct payload`, () => {
    expect(ReviewsActionCreator.setReviews([{fake: `user`}])).toEqual({
      type: ReviewsActionType.SET_REVIEWS,
      payload: [{fake: `user`}]
    });
  });
});

describe(`Reviews reducer works correctly`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(undefined, {})).toEqual(ReviewsInitialState);
  });

  it(`should set reviews to store on  action`, () => {
    const action = {
      type: ReviewsActionType.SET_REVIEWS,
      payload: [review]
    };

    expect(reducer(ReviewsInitialState, action)).toEqual(
        Object.assign({}, ReviewsInitialState, {
          reviews: [review]
        }));
  });
});
