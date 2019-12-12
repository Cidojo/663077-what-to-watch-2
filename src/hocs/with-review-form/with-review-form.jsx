import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ReviewsOperation} from '../../reducers/reviews-reducer/reviews-reducer.js';
import {Url} from './../../constants/constants.js';

const COMMENT_VALIDATION = /.{50,400}/;

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: ``,
        isValid: false,
        isDisabled: false
      };

      this.handleCommentInput = this.handleCommentInput.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleBlockStatus = this.handleBlockStatus.bind(this);
    }

    componentDidUpdate() {
      this._validateOnInput();
    }

    _validateOnInput() {
      if (this.state.rating !== null) {
        this.setState({
          isValid: !!this.state.comment.match(COMMENT_VALIDATION)
        });
      }
    }

    handleSubmit(e) {
      e.preventDefault();

      const {onSubmit, history} = this.props;
      const id = this.props.match.params.id;

      this.setState({
        isDisabled: true
      });

      onSubmit({
        rating: this.state.rating,
        comment: this.state.comment
      }, id)
        .then((data) => {
          if (data) {
            history.push(`${Url.FILM}/${id}`);
          } else {
            this.handleBlockStatus(false);
          }
        })
        .catch(() => {
          this.handleBlockStatus(false);
          throw new Error(`SESSION EXPIRED OR SERVER ERROR`);
        });
    }

    handleBlockStatus(status) {
      this.setState({
        isDisabled: status
      });
    }

    handleCommentInput(e) {
      this.setState({
        comment: e.currentTarget.value
      });
    }

    handleRatingChange(e) {
      if (e.target.tagName.toLowerCase() === `input`) {
        this.setState({
          rating: e.target.value
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isValid={this.state.isValid}
          onCommentInput={this.handleCommentInput}
          onRatingChange={this.handleRatingChange}
          onSubmit={this.handleSubmit}
          isDisabled={this.state.isDisabled}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    onSubmit: PropTypes.func,
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    })
  };

  WithReviewForm.defaultProps = {
    onSubmit: () => {},
    history: {
      push: () => {}
    },
    match: {
      params: {
        id: `0`
      }
    }
  };

  const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (data) => {
      return dispatch(ReviewsOperation.postReview(data, ownProps.match.params.id));
    }
  });

  return connect(null, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
