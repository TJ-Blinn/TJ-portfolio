import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

// The 'root' id is the index.html in the >body>, connecting App directly to the root id.
ReactDOM.render(<App />, document.getElementById("root"));
