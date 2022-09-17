import React from "react";
import { createRoot } from "react-dom/client"
import LatihanSPA from "./3-latihan-spa/LatihanSPA";
import LearnReactRouter from "./4-react-router/LearnReactRouter";
import LatihanPropTypes from "./2-latihan-menambahkan-PropTypes/LatihanPropTypes";
import LearnPropTypes from "./1-prop-types/LearnPropTypes";
import App from "./5-latihan-path-parameter/App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  {/* <LearnPropTypes /> */}
  {/* <LatihanPropTypes /> */}
  {/* <LatihanSPA /> */}
  {/* <LearnReactRouter /> */}

  <Router>
    <App />
  </Router>
</React.StrictMode>
)