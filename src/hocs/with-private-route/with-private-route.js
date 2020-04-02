import React from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    const {authorized} = props;

    if (!authorized) {
      return <Redirect to="/login"/>;
    }

    return <Component {...props}/>;
  };

  WithPrivateRoute.propTypes = {
    authorized: PropTypes.bool
  };

  return WithPrivateRoute;
};

const mapStateToProps = (state) => ({
  authorized: getAuthorizationStatus(state),
});

export default compose(
    connect(mapStateToProps),
    withPrivateRoute
);
