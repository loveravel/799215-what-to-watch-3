import React from "react";

import Logotype from "../logotype/logotype.jsx";
import UserBlock from "../user-block/user-block.jsx";

const PageHeader = () => {
  return (
    <header className="page-header movie-card__head">
      <Logotype/>
      <UserBlock/>
    </header>
  );
};

export default PageHeader;
