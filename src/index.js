// Global Styles
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./services/service-worker";
import Routes from "./routes";

String.prototype.format = function () {
  let a = this;
  for (const k in arguments) {
    a = a.replace(`{${k}}`, arguments[k]);
  }
  return a;
};


ReactDOM.render(
  <Routes />,
  document.getElementById("root"),
);
registerServiceWorker();
