import "aos/dist/aos.css";

import React, { useEffect } from "react";

import AOS from "aos";
import ReactGA from 'react-ga';
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import useHotjar from 'react-use-hotjar';

const App = () => {
  ReactGA.initialize('G-31G5XN8PB7');
  const { initHotjar } = useHotjar();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    initHotjar(2762382, 6, false, console.info);
  }, [initHotjar]);

  return (
    <div className="all_wrap">
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
