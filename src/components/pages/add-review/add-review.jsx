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

const AddReview = (props) => {
  const {activeCard} = props;
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
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  activeCard: movieCardPropTypes
};

AddReview.defaultProps = {
  activeCard: {}
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    activeCard: Selectors.getActiveCard(state)
  });
};

export {AddReview};
export default connect(mapStateToProps)(AddReview);
