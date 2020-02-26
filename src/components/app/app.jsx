import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {films} = props;
  return (
    <Main films={films} onTitleClick={() => {}} />
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    page: PropTypes.string
  })),
};

export default App;
