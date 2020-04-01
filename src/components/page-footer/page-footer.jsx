import React from "react";
import Logotype from "../logotype/logotype.jsx";

const PageFooter = () => {

  return (
    <footer className="page-footer">
      <Logotype
        isLight={true}
      />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default PageFooter;
