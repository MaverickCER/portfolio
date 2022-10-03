import "aos/dist/aos.css";

import React, { useEffect } from "react";

import AOS from "aos";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="all_wrap">
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
