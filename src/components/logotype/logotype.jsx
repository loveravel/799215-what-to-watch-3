import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Logotype = (props) => {
  const {isLight} = props;

  return (
    <div className="logo">
      <Link to="/" className={`logo__link${isLight ? ` logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logotype.propTypes = {
  isLight: PropTypes.bool,
};

export default Logotype;
