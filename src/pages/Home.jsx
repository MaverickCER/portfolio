import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import ReactGA from 'react-ga';
import { useEffect } from "react";
import useHotjar from 'react-use-hotjar';

const Home = () => {
  const { stateChange } = useHotjar();

  useEffect(() => {
    ReactGA.event({ action: 'navigation', category: 'home', label: 'initial' });
    stateChange('/', console.info);
  });

  return (
    <>
      <Header />
      {/* End Header */}

      <Hero />

      <div className="portfolio" id="portfolio">
        <Portfolio />
      </div>

      <div className="about" id="about">
        <About />
      </div>

      <div className="contact" id="contact">
        <Contact />
      </div>

      <div className="copyright" id="copyright">
        <Footer />
      </div>
    </>
  );
};

export default Home;
