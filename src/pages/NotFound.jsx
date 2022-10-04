import Contact from '../components/Contact';
import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import useHotjar from 'react-use-hotjar';

const NotFound = () => {
  const { stateChange } = useHotjar();

  useEffect(() => {
    ReactGA.event({ action: 'navigation', category: '404', label: 'initial' });
    stateChange('/404', console.info);
  }, []);

  return (
    <>
      <Header />
      <Error />
      <Contact />
      <Footer />
    </>
  );
};

export default NotFound;
