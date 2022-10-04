import Contact from "../components/Contact";
import Error from "../components/Error";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReactGA from 'react-ga';

const NotFound = () => {
  const { stateChange } = useHotjar();

  useEffect(() => {
    ReactGA.event({ action: 'navigation', category: '404', label: 'initial' });
    stateChange('/404', console.info);
  }, [stateChange]);

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
