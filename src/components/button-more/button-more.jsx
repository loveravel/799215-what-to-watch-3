import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilmsCount, getFilteredFilms} from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/data/data.js";

const ButtonMore = (props) => {
  const {filteredFilms, filmsCount, incrementFilmsCount} = props;

  if (filteredFilms.length <= filmsCount) {
    return null;
  }

  return (
    <button
      className="catalog__button"
      type="button"
      onClick={() => {
        incrementFilmsCount();
      }}
    >
      Show more
    </button>
  );
};

ButtonMore.propTypes = {
  filteredFilms: PropTypes.array,
  filmsCount: PropTypes.number,
  incrementFilmsCount: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmsCount: getFilmsCount(state),
  filteredFilms: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  incrementFilmsCount() {
    dispatch(ActionCreator.incrementFilmsCount());
  }
});

export {ButtonMore};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonMore);
