import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Logo} from './../../parts/logo/logo.jsx';
import {MovieCardBackground} from './../../parts/movie-card-background/movie-card-background.jsx';
import {MovieCardPoster} from './../../parts/movie-card-poster/movie-card-poster.jsx';
import {Breadcrumbs} from './../../parts/breadcrumbs/breadcrumbs.jsx';
import UserBlock from './../../parts/user-block/user-block.jsx';
import Selectors from './../../../selectors/selectors.js';
import {movieCardPropTypes} from './../../../global-custom-types.js';
import withAuthAccess from './../../../hocs/with-auth-access/with-auth-access.jsx';
import withReviewForm from './../../../hocs/with-review-form/with-review-form.jsx';

const RATING_COUNT = 5;

const AddReview = (props) => {
  const {
    activeCard,
    onSubmit,
    onCommentInput,
    onRatingChange,
    isValid,
    isDisabled
  } = props;

  const {posterImage, name, backgroundImage} = activeCard;


  return (
    <section className="movie-card movie-card--full">

      <div className="movie-card__header">
        <MovieCardBackground
          backgroundImage={backgroundImage}
          name={name}
        />

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <Breadcrumbs
            activeCard={activeCard}
          />

          <UserBlock />
        </header>

        <MovieCardPoster
          posterImage={posterImage}
          name={name}
          extraClassName={`movie-card__poster--small`}
        />
      </div>

      <div className="add-review">
        <form onSubmit={onSubmit} action="#" className="add-review__form">
          <div className="rating">
            <div
              className="rating__stars"
              onChange={onRatingChange}
            >
              {[...Array(RATING_COUNT).keys()].map((_, index) => (
                <React.Fragment key={`star-${index}`}>
                  <input disabled={isDisabled} className="rating__input" id={`star-${index + 1}`} type="radio" name="rating" value={index + 1}/>
                  <label className="rating__label" htmlFor={`star-${index + 1}`}>Rating {index + 1}</label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              onChange={onCommentInput}
              disabled={isDisabled}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={isDisabled || !isValid}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  activeCard: movieCardPropTypes,
  onSubmit: PropTypes.func,
  onCommentInput: PropTypes.func,
  onRatingChange: PropTypes.func,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool
};

AddReview.defaultProps = {
  activeCard: {},
  onSubmit: () => {},
  onCommentInput: () => {},
  onRatingChange: () => {},
  isValid: false,
  isDisabled: false
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeCard: Selectors.getActiveCardById(state, ownProps.match.params.id)
  });
};

export {AddReview};
export default connect(mapStateToProps)(withAuthAccess(withReviewForm(AddReview)));
