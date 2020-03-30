import React from "react";
import PropTypes from "prop-types";

const PageHeader = (props) => {
  const {avatar} = props;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

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
