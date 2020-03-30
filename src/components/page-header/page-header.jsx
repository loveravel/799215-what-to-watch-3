import React from "react";
import PropTypes from "prop-types";
import Logotype from "../logotype/logotype.jsx";

const PageHeader = (props) => {
  const {avatar} = props;

  return (
    <header className="page-header movie-card__head">

      <Logotype/>

      <div className="user-block">
        <div className="user-block__avatar">
          <img
            src={avatar}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  avatar: PropTypes.string,
};

export default PageHeader;
