import React from "react";
import ReactDOM from "react-dom";

// Global Styles
import "bootstrap/dist/css/bootstrap.css";

import registerServiceWorker from "./util/service-worker";
import Routes from "./routes";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
