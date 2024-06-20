import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import "./styles/index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Main from "./pages/main";

import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ParallaxProvider>
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  </ParallaxProvider>
);
