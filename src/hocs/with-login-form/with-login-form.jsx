import * as React from 'react';
import * as PropTypes from 'prop-types';

import {AuthOperation} from './../../reducers/auth-reducer/auth-reducer';
import {connect} from 'react-redux';

const withLoginForm = (Component) => {
  class WithLoginForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isValid: false
      };

      this.handleEmailInput = this.handleEmailInput.bind(this);
      this.handlePasswordInput = this.handlePasswordInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailInput(e) {
      this.setState({
        email: e.currentTarget.value
      });
    }

    handlePasswordInput(e) {
      this.setState({
        password: e.currentTarget.value
      });
    }

    handleSubmit(e) {
      e.preventDefault();

      this.props.onAuthorize({
        email: this.state.email,
        password: this.state.password
      });
    }

    render() {
      return (
        <Component
          onEmailInput={this.handleEmailInput}
          onPasswordInput={this.handlePasswordInput}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  WithLoginForm.propTypes = {
    onAuthorize: PropTypes.func
  };

  WithLoginForm.defaultProps = {
    onAuthorize: () => {}
  };

  const mapStateToProps = () => ({
    authorized: false
  });

  const mapDispatchToProps = (dispatch) => ({
    onAuthorize: (data) => {
      dispatch(AuthOperation.authorize(data));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithLoginForm);
};

export default withLoginForm;
