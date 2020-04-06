import React from "react";
import PropTypes from "prop-types";

import Logotype from "../logotype/logotype.jsx";
import UserBlock from "../user-block/user-block.jsx";

const PageHeader = (props) => {
  const {additionalClass} = props;
  return (
    <header className={`page-header ${additionalClass}`}>
      <Logotype/>
      <UserBlock/>
    </header>
  );
};

PageHeader.propTypes = {
  additionalClass: PropTypes.string.isRequired,
};

export default PageHeader;
