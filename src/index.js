import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";

import Main from "./pages/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
