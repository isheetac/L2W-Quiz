import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";
import { store } from "./redux/store/index";
import AppContainer from "./container/AppContainer";

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById("root")
);
