import CalloutsEvolvedShowcase from '../assets/images/calloutsevolvedshowcase.webp';
import CelligenceShowcase from '../assets/images/celligenceshowcase.webp';
import { ReactComponent as Decore } from '../assets/icons/decore.svg';
import FirstClassTileShowcase from '../assets/images/firstclasstileshowcase.webp';
import MoreriseShowcase from '../assets/images/moreriseshowcase.webp';
import MorganShowcase from '../assets/images/morganshowcase.webp';
import SWMCShowcase from '../assets/images/swmcshowcase.webp';

const portfolioContent = [
  {
    image: MorganShowcase,
    link: `/project/morgan`,
    subtitle: 'React - Node - Socket.io',
    title: 'Mortgage Chat AI',
  },
  {
    image: SWMCShowcase,
    link: `/project/swmc`,
    subtitle: 'React - AWS S3 - 14 sites!',
    title: 'Lead Generation',
  },
  {
    image: CalloutsEvolvedShowcase,
    link: `/project/calloutsevolved`,
    subtitle: 'React - Next.js - Firebase',
    title: 'AAC for Gamers',
  },
  {
    image: CelligenceShowcase,
    link: `/project/celligence`,
    subtitle: 'React - Observer - CSS Modules',
    title: 'Empathic Technology',
  },
  {
    image: MoreriseShowcase,
    link: `/project/morerise`,
    subtitle: 'Angular - LESS - TypeScript',
    title: 'Language Learning',
  },
  {
    image: FirstClassTileShowcase,
    link: `/project/firstclasstile`,
    subtitle: 'SASS - JS - WordPress',
    title: 'Tiling Agency',
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="title_holder">
          <span>Portfolio</span>
          <h2>Featured Projects</h2>
        </div>
        <div className="portfolio_list">
          <ul>
            {portfolioContent.map((val, i) => (
              <li
                key={i}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={`${i * 100}`}>
                <a href={val.link} target="_blank" rel="noopener noreferrer">
                  <div className="list_inner">
                    <div className="title">
                      <h3>{val.title}</h3>
                      <br />
                      <span>{val.subtitle}</span>
                    </div>
                    <img src={val.image} alt={val.title} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Decore />
    </>
  );
};

export default Portfolio;
