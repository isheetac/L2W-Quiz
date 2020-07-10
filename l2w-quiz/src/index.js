import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";
import AppContainer from "./container/AppContainer";
import { store } from "./redux/store/index";

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById("root")
);
