import React from "react";
import PropTypes from "prop-types";

import PageFooter from "../page-footer/page-footer.jsx";
import Catalog from "../catalog/catalog.jsx";
import MoviePromo from "../movie-promo/movie-promo.jsx";

const Main = (props) => {
  const {movie} = props;

  return (
    <React.Fragment>
      <MoviePromo
        name={movie.name}
        posterImage={movie.posterImage}
        backgroundImage={movie.backgroundImage}
        genre={movie.genre}
        released={movie.released}
        avatar={`img/avatar.jpg`}
      />

      <div className="page-content">

        <Catalog
          standard={true}
        />

        <PageFooter />

      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
  }),
};

export default Main;
