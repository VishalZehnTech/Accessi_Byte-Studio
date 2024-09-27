import React from "react";
import ReactDOM from "react-dom/client";
import ToggleButtons from "./src/component/Toggle.js"
import IndexContainer from './src/containers/IndexContainer.js'
import './src/CSS/CSS_component/index.css'

ReactDOM.createRoot(document.getElementById("header")).
  render(<IndexContainer />);
  // render(<ToggleButtons />);