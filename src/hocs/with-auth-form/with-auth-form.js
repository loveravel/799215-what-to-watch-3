import React from "react";
import PropTypes from "prop-types";
import {compose} from "recompose";
import {connect} from "react-redux";

import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

import {ErrorText, InputName, EMAIL_REGEX} from "../../constants.js";


const validateForm = (data, errors) => {
  const nonNullFields = Object.values(data).every((val) => val.length);
  const nonErrors = !Object.values(errors).some((val) => val.length);
  return nonErrors && nonNullFields;
};

const withAuthForm = (Component) => {
  class WithAuthForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        formData: {
          [InputName.EMAIL]: ``,
          [InputName.PASSWORD]: ``,
        },
        formError: {
          email: ``,
          password: ``,
        },
        isValid: false,
      };

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(evt) {
      const {name, value} = evt.target;
      const formError = Object.assign({}, this.state.formError);

      switch (name) {
        case InputName.EMAIL:
          formError.email = EMAIL_REGEX.test(value) ? `` : ErrorText.EMAIL;
          break;
        case InputName.PASSWORD:
          formError.password = value.length <= 3 ? ErrorText.PASSWORD : ``;
          break;
        default:
          break;
      }

      this.setState((prevState) => {
        const formData = Object.assign({}, prevState.formData);
        formData[name] = value;

        return {
          formData,
          formError,
          isValid: validateForm(formData, formError)
        };
      });
    }

    _handleSubmit(evt) {
      evt.preventDefault();

      const {formData, isValid} = this.state;

      if (!isValid) {
        return;
      }

      this.props.login(formData);
    }

    render() {
      const {isValid, formError, formData} = this.state;
      const {authorized} = this.props;

      return (
        <Component
          {...this.props}
          formData={formData}
          formError={formError}
          isValid={isValid}
          authorized={authorized}
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithAuthForm.propTypes = {
    login: PropTypes.func,
    authorized: PropTypes.bool,
  };

  return WithAuthForm;
};

const mapStateToProps = (state) => ({
  authorized: getAuthorizationStatus(state),
});


const mapDispatchToProps = (dispatch) =>({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {withAuthForm};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthForm
);
