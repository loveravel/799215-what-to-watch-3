import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Logotype from "../logotype/logotype.jsx";

const PageHeader = (props) => {
  const {user} = props;

  return (
    <header className="page-header movie-card__head">

      <Logotype/>

      <div className="user-block">
        {
          !user
            ? (<Link to="/login" className="user-block__link">Sign in</Link>)
            : (
              <Link to="/my-list" className="user-block__avatar">
                <img
                  src={user.avatar}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </Link>
            )
        }
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  user: PropTypes.object,
};

export default PageHeader;
