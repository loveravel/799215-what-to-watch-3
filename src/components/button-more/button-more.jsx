import React from "react";
import PropTypes from "prop-types";

const ButtonMore = (props) => {
  const {onButtonClick} = props;

  return (
    <button
      className="catalog__button"
      type="button"
      onClick={onButtonClick}
    >
      Show more
    </button>
  );
};

ButtonMore.propTypes = {
  onButtonClick: PropTypes.func,
};

export default ButtonMore;
