import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Main from "./pages/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ParallaxProvider>
    <Router>
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    </Router>
  </ParallaxProvider>
);
