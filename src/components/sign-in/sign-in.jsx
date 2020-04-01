import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";


import PageFooter from "../page-footer/page-footer.jsx";
import Logotype from "../logotype/logotype.jsx";

const SignIn = (props) => {
  const {authorized, isValid, formData, formError} = props;
  const {onChange, onSubmit} = props;

  if (authorized) {
    return <Redirect to="/"/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logotype/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">

          {
            !isValid &&
            <div className="sign-in__message">
              <p>{formError.email || formError.password}</p>
            </div>
          }

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                onChange={onChange}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                onChange={onChange}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={onSubmit}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <PageFooter />

    </div>
  );
};

SignIn.propTypes = {
  authorized: PropTypes.bool,
  isValid: PropTypes.bool,
  formData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  formError: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SignIn;
