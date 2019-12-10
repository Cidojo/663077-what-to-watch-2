import * as React from 'react';
import * as PropTypes from 'prop-types';

import {Footer} from './../../parts/footer/footer.jsx';
import {Header} from './../../parts/header/header.jsx';
import withLoginForm from './../../../hocs/with-login-form/with-login-form.jsx';

const SignIn = (props) => {
  const {
    onEmailInput,
    onPasswordInput,
    onSubmit,
    errorMessages
  } = props;

  return (
    <>
      <div className="user-page">
        <Header />

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={onSubmit}
          >
            {errorMessages.length > 0 &&
              <div className="sign-in__message">
                {errorMessages.map((message) => <p key={message}>{message}</p>)}
              </div>
            }
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  onChange={onEmailInput}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  onChange={onPasswordInput}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    </>
  );
};

SignIn.propTypes = {
  onEmailInput: PropTypes.func,
  onPasswordInput: PropTypes.func,
  onSubmit: PropTypes.func,
  errorMessages: PropTypes.arrayOf(PropTypes.string)
};

SignIn.defaultProps = {
  onEmailInput: () => {},
  onPasswordInput: () => {},
  onSubmit: () => {},
  errorMessages: []
};

export {SignIn};
export default withLoginForm(SignIn);
