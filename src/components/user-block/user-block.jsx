import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getAuthorizationStatus, getUserData} from "../../reducer/user/selectors.js";

import {BASE_URL} from "../../constants.js";
import history from "../../history.js";

const UserBlock = (props) => {
  const {userData, authorized} = props;
  return (
    <div className="user-block">
      {
        !authorized
          ? (<Link to="/login" className="user-block__link">Sign in</Link>)
          : (
            <div className="user-block__avatar">
              <img
                src={`${BASE_URL}${userData.avatarUrl}`}
                alt="User avatar"
                width="63"
                height="63"
                onClick={() => history.push(`/mylist`)}
              />
            </div>
          )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: getUserData(state),
    authorized: getAuthorizationStatus(state)
  };
};

UserBlock.propTypes = {
  authorized: PropTypes.bool,
  userData: PropTypes.object,
};

export {UserBlock};

export default connect(mapStateToProps)(UserBlock);
