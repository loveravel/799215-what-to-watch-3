import React from "react";
import ReactDOM from "react-dom";
import films from "./mocks/films.js";
import comments from "./mocks/comments.js";
import App from "./components/app/app.jsx";

ReactDOM.render(
    <App
      films={films}
      comments={comments}
    />,
    document.getElementById(`root`)
);
