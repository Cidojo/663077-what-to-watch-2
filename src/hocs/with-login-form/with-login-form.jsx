import * as React from 'react';
import * as PropTypes from 'prop-types';

import {AuthOperation} from './../../reducers/auth-reducer/auth-reducer';
import {connect} from 'react-redux';

const FieldName = {
  EMAIL: `email`,
  PASSWORD: `password`
};

const FieldError = {
  [FieldName.EMAIL]: `Please enter a valid email address`,
  [FieldName.PASSWORD]: `Please enter a valid password`
};

const FieldValidity = {
  [FieldName.EMAIL]: /.+@.+\..+/g,
  [FieldName.PASSWORD]: /.+/g
};

const withLoginForm = (Component) => {
  class WithLoginForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        inputData: {
          [FieldName.EMAIL]: ``,
          [FieldName.PASSWORD]: ``
        },
        errors: [],
        isValid: false
      };

      this.handleEmailInput = this.handleEmailInput.bind(this);
      this.handlePasswordInput = this.handlePasswordInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this._validate = this._validate.bind(this);
      this._resetErrors = this._resetErrors.bind(this);
    }

    handleEmailInput(e) {
      this.setState({
        inputData: Object.assign({}, this.state.inputData, {
          email: e.currentTarget.value
        })
      });

      this._resetErrors();
    }

    handlePasswordInput(e) {
      this.setState({
        inputData: Object.assign({}, this.state.inputData, {
          password: e.currentTarget.value
        })
      });

      this._resetErrors();
    }

    _resetErrors() {
      if (this.state.errors.length) {
        this.setState({
          errors: []
        });
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      const {onAuthorize, history} = this.props;

      const errors = this._validate();

      if (!errors.length) {
        onAuthorize({
          email: this.state.inputData[FieldName.EMAIL],
          password: this.state.inputData[FieldName.PASSWORD]
        })
        .then((data) => {
          if (data) {
            history.goBack();
          }
        })
        .catch((err) => void err);
      } else {
        this.setState({
          errors
        });
      }
    }

    _validate() {
      return Object.entries(this.state.inputData).reduce((resultErrors, [fieldName, value]) => {
        const isValid = !!value.match(FieldValidity[fieldName]);
        if (!isValid) {
          resultErrors.push(FieldError[fieldName]);
        }

        return resultErrors;
      }, []);
    }

    render() {
      return (
        <Component
          errorMessages={this.state.errors}
          onEmailInput={this.handleEmailInput}
          onPasswordInput={this.handlePasswordInput}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  WithLoginForm.propTypes = {
    onAuthorize: PropTypes.func,
    history: PropTypes.shape({
      goBack: PropTypes.func
    })
  };

  WithLoginForm.defaultProps = {
    onAuthorize: () => {},
    history: {}
  };

  const mapStateToProps = () => ({
    authorized: false
  });

  const mapDispatchToProps = (dispatch) => ({
    onAuthorize: (data) => {
      return dispatch(AuthOperation.authorize(data));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithLoginForm);
};

export default withLoginForm;
