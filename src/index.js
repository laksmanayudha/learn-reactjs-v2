import React from "react";
import { createRoot } from "react-dom/client"
// import LatihanSPA from "./3-latihan-spa/LatihanSPA";
// import LearnReactRouter from "./4-react-router/LearnReactRouter";
// import LatihanPropTypes from "./2-latihan-menambahkan-PropTypes/LatihanPropTypes";
// import LearnPropTypes from "./1-prop-types/LearnPropTypes";
// import LatihanPathParameter from "./5-latihan-path-parameter/App";
// import LatihanComponentLifecycle from "./6-latihan-component-lifecycle/App";
// import { BrowserRouter as Router } from "react-router-dom";
// import LatihanReactContext from "./7-react-context/App";
// import LatihanContextColorTheme from "./8-latihan-react-context-colorTheme/App";
// import Greeting from "./9-useState/Greeting";
// import LatihanUseState from "./10-latihan-useState/App";
// import Counter from "./11-useEffect/Counter";
// import GitHubProfile from "./11-useEffect/GitHubProfile";
// import LearnUseEffect from "./11-useEffect/App";

const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  {/* <LearnPropTypes /> */}
  {/* <LatihanPropTypes /> */}
  {/* <LatihanSPA /> */}
  {/* <LearnReactRouter /> */}

  {/* latihan 5 path parameter/search param */}
  {/* <Router>
    <LatihanPathParameter />
  </Router> */}

  {/* latihan 6 component lifecycle */}
  {/* <LatihanComponentLifecycle /> */}

  {/* latihan 7 react context */}
  {/* <LatihanReactContext /> */}

  {/* latihan 8 react context - color theme */}
  {/* <LatihanContextColorTheme /> */}

  {/* latihan 9 useState */}
  {/* <Greeting /> */}

  {/* latihan 10 latihan mengelola state dengan useState */}
  {/* <LatihanUseState /> */}

  {/* latihan 11 useEffect */}
  {/* <Counter /> */}
  {/* <GitHubProfile username={'dicodingacademy'} /> */}
  {/* <LearnUseEffect /> */}

</React.StrictMode>
)