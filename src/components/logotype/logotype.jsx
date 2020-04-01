import React from "react";
import PropTypes from "prop-types";

const Logotype = (props) => {
  const {isLight} = props;

  return (
    <div className="logo">
      <a className={`logo__link${isLight ? ` logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logotype.propTypes = {
  isLight: PropTypes.bool,
};

export default Logotype;
