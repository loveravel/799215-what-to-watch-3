import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

ReactDOM.render(
    <App
      films={[`Aviator`, `Bohemian Rhapsody`, `Macbeth`]}
    />,
    document.getElementById(`root`)
);
