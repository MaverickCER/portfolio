import React, { useEffect, useState } from 'react';

import Contact from '../components/Contact';
import DisplateVideo from '../assets/videos/displatevideo.mp4';
import Error from '../components/Error';
import FirstClassTileVideo from '../assets/videos/firstclasstilevideo.mp4';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import LinkedInVideo from '../assets/videos/linkedinvideo.mp4';
import TransAmericaVideo from '../assets/videos/transamericavideo.mp4';

const projectContent = {
  calloutsevolved: {
    client: 'Deaf Destiny Network',
    code: 'https://github.com/MaverickCER/CalloutsEvolved',
    description: 'Augmentative and Alternative Communication Application for Gamers',
    link: 'https://www.calloutsevolved.com/',
    name: 'Callouts Evolved',
    role: 'Project Manager, Designer, Software Developer',
    sector: 'Video Games, Accessibility',
    src: 'https://www.youtube.com/embed/21io3LQorv4?autoplay=1&loop=1&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&controls=0&modestbranding=1&playlist=21io3LQorv4',
    technologies:
      '2017: PHP, Laravel, and Websockets. 2019: HTML, CSS, jQuery, and Firebase. 2021: React, Redux, StyledComponents. 2023: NextJs, MUI, Mongoose, Socket.io, WebRTC, and various bots / service integrations',
    timeframe: 'Ongoing',
    title: 'Callouts Evolved AAC For Gamers',
    video: '',
    next: {
      name: 'Celligence',
      link: 'celligence',
    },
    prev: {
      name: 'SWMC',
      link: 'swmc',
    },
  },
  celligence: {
    client: 'Sun West Mortgage Company',
    code: '',
    description: 'Education and outreach regarding Empathic Technology',
    link: 'https://www.celligence.com',
    name: 'Celligence',
    role: 'Developer',
    sector: 'Education, Outreach',
    src: '',
    technologies: 'React, Intersection Observer, ',
    timeframe: '1 Week',
    title: 'Celligence Empathic Technology',
    video: '',
    next: {
      name: 'Language Learning',
      link: 'morerise',
    },
    prev: {
      name: 'AAC for Gamers',
      link: 'calloutsevolved',
    },
  },
  darlingsalon: {
    client: 'Paige, Cosmetologist',
    code: 'https://codepen.io/maverickcer/pen/KKmPLxB',
    description: '',
    link: 'https://codepen.io/maverickcer/pen/KKmPLxB',
    name: 'Darling Salon',
    role: 'Front End Developer',
    sector: 'Cosmetology Lead Generation',
    src: '',
    technologies: 'HTML, CSS, JavaScript, Instagram API',
    timeframe: '16 Hours',
    title: 'Darling Salon Lead Generation',
    video: '',
    next: {
      name: 'Mortgage Chat AI',
      link: 'morgan',
    },
    prev: {
      name: 'Tiling Agency',
      link: 'firstclasstile',
    },
  },
  displate: {
    client: 'Clone of Email Recieved from Displate',
    code: 'https://codepen.io/maverickcer/pen/ExWvJBG',
    description: 'Promotional Email for Niche Ecommerce Store',
    link: 'https://codepen.io/maverickcer/pen/ExWvJBG',
    name: 'Displate HTML Email',
    role: 'HTML Email Developer',
    sector: 'Promotional Email',
    src: '',
    technologies: 'HTML, CSS',
    timeframe: '4 hours',
    title: 'HTML, CSS, Litmus',
    video: DisplateVideo,
    next: {
      name: 'Mortgage Chat AI',
      link: 'morgan',
    },
    prev: {
      name: 'Tiling Agency',
      link: 'firstclasstile',
    },
  },
  firstclasstile: {
    client: 'First Class Tile LLC',
    code: 'https://codepen.io/maverickcer/pen/mdMgbpY',
    description: 'Lead generation website for local business',
    link: 'https://codepen.io/maverickcer/pen/mdMgbpY',
    name: 'First Class Tile',
    role: 'Front End Developer',
    sector: 'Tile Focused Construction Agency',
    src: '',
    technologies: 'HTML, CSS, JS, Wordpress',
    timeframe: '1 Month',
    title: 'First Class Tile Lead Generation Website',
    video: FirstClassTileVideo,
    next: {
      name: 'Mortgage Chat AI',
      link: 'morgan',
    },
    prev: {
      name: 'Language Learning',
      link: 'morerise',
    },
  },
  linkedin: {
    client: 'Clone of Email Recieved from LinkedIn',
    code: 'https://codepen.io/maverickcer/pen/xxqLvMM',
    description: 'Promotional Email for Niche Ecommerce Store',
    link: 'https://codepen.io/maverickcer/pen/xxqLvMM',
    name: 'LinkedIn HTML Email',
    role: 'HTML Email Developer',
    sector: 'Lead Nurturing Email',
    src: '',
    technologies: 'HTML, CSS',
    timeframe: '1 Day',
    title: 'LinkedIn HTML Email Clone',
    video: LinkedInVideo,
    next: {
      name: 'Mortgage Chat AI',
      link: 'morgan',
    },
    prev: {
      name: 'Tiling Agency',
      link: 'firstclasstile',
    },
  },
  morerise: {
    client: 'Portfolio Project',
    code: 'https://github.com/MaverickCER/morerise',
    description: 'Dribbble Inspired Language Learning Application',
    link: 'https://maverickcer.github.io/morerise/',
    name: 'Morerise',
    role: 'Project Manager, Frontend Developer',
    sector: 'Education, Language Learning',
    src: 'https://www.youtube.com/embed/CgfNNlKAsUs?autoplay=1&loop=1&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&controls=0&modestbranding=1&playlist=CgfNNlKAsUs',
    technologies: 'Angular, LESS',
    timeframe: '1 Month',
    title: 'Morerise Language Learning Website',
    video: '',
    next: {
      name: 'Tiling Agency',
      link: 'firstclasstile',
    },
    prev: {
      name: 'Empathic Technology',
      link: 'celligence',
    },
  },
  morgan: {
    client: 'Sun West Mortgage Company',
    code: '',
    description: 'Industry leading broker chat application with AI',
    link: 'https://www.hellomorgan.com',
    name: 'Morgan',
    role: 'Full Stack Developer',
    sector: 'Mortage Industry',
    src: 'https://www.youtube.com/embed/-cSzOIlWNL8?autoplay=1&loop=1&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&controls=0&modestbranding=1',
    technologies: 'React, Material UI, Node.js, Socket.io, Sentiment, Compression',
    timeframe: '2 Months',
    title: 'Morgan AI for Chat Mortgage Management',
    video: '',
    next: {
      name: 'SWMC',
      link: 'swmc',
    },
    prev: {
      name: 'Tiling Agency',
      link: 'firstclasstile',
    },
  },
  swmc: {
    client: 'Sun West Mortgage Company',
    code: '',
    description:
      'Lead generation for SWMC including development and implementation of a form component into 14 websites',
    link: 'https://www.swmc.com',
    name: 'Sun West Mortgage Company',
    role: 'Front End Web Developer',
    sector: 'Mortgage, B2B and C2B',
    src: '',
    technologies:
      'React, Java Server Pages, PHP, Laravel, AWS Lambda, AWS S3, AWS EC2, and Apache hosting',
    timeframe: '6 Months',
    title: 'SWMC Lead Generation',
    video: '',
    next: {
      name: 'AAC for Gamers',
      link: 'calloutsevolved',
    },
    prev: {
      name: 'Mortgage Chat AI',
      link: 'morgan',
    },
  },
  transamerica: {
    client: 'Clone of Email Recieved from Transamerica',
    code: 'https://codepen.io/maverickcer/pen/QWpqLOx',
    description: 'Milestone Email for Financial Institution',
    link: 'https://codepen.io/maverickcer/pen/QWpqLOx',
    name: 'TransAmerica HTML Email',
    role: 'HTML Email Developer',
    sector: 'Milestone Email',
    src: '',
    technologies: 'HTML, CSS',
    timeframe: '4 hours',
    title: 'HTML, CSS, Email on Acid',
    video: TransAmericaVideo,
    next: {
      name: 'Mortgage Chat AI',
      link: 'morgan',
    },
    prev: {
      name: 'Tiling Agency',
      link: 'firstclasstile',
    },
  },
  project: {
    client: '',
    code: '',
    description: '',
    link: '',
    name: '',
    role: '',
    sector: '',
    src: '',
    technologies: '',
    timeframe: '',
    title: '',
    video: '',
    next: {
      name: '',
      link: '',
    },
    prev: {
      name: '',
      link: '',
    },
  },
};

const projectList = [
  'calloutsevolved',
  'celligence',
  'darlingsalon',
  'displate',
  'firstclasstile',
  'linkedin',
  'morerise',
  'morgan',
  'swmc',
  'transamerica',
];

const Project = ({ id }) => {
  const [project, setProject] = useState(undefined);
  const [preload, setPreload] = useState(true);
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    if (projectList.includes(id)) {
      setProject(projectContent[id]);
    }
    let addTimer = setTimeout(() => {
      setPreloaded(true);
    }, 1000);
    let removeTimer = setTimeout(() => {
      setPreload(false);
    }, 2000);
    return () => {
      clearInterval(addTimer);
      clearInterval(removeTimer);
    };
  }, [id, stateChange]);

  return (
    <>
      {preload && (
        <div id="preloader" class={preloaded ? "preloaded" : ""}>
          <div class="loader_line"></div>
        </div>
      )}
      <Header isDark />
      {project ? (
        <div className="project" id="portfolio">
          <div className="container">
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
            <div className="frame_wrapper">
              <div className="frame_container">
                {project.video !== '' ? (
                  <video
                    width="1920"
                    height="1080"
                    autoPlay
                    muted
                    loop
                    title={`Maverick Manasco Web Developer Portfolio Project - ${project.title}`}>
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    width="560"
                    height="315"
                    src={
                      project.src === ''
                        ? 'https://www.youtube.com/embed/5hqd3knvcWk?autoplay=1&loop=1&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&controls=0&modestbranding=1'
                        : project.src
                    }
                    title={`Maverick Manasco Web Developer Portfolio Project - ${project.title}`}
                    frameborder="0"
                    allow="autoplay"
                  />
                )}
              </div>
            </div>
            <div className="description">
              <div className="left" data-aos="fade-right" data-aos-duration="1200">
                <ul>
                  <li>Client</li>
                  <li>{project.client}</li>
                  <li>Sector</li>
                  <li>{project.sector}</li>
                  <li>My Role</li>
                  <li>{project.role}</li>
                  <li>Timeframe</li>
                  <li>{project.timeframe}</li>
                  <li>Technologies</li>
                  <li>{project.technologies}</li>
                </ul>
              </div>
              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150">
                {project.link !== '' ? (
                  <a href={project.link} target="_blank" rel="noreferrer noopenner">
                    <span className="wrapper">
                      <span className="first">View&nbsp;Project</span>
                      <span className="second">View&nbsp;Project</span>
                    </span>
                  </a>
                ) : (
                  <div className="disabled_link">
                    <span className="wrapper">
                      <span className="first">Unavailable</span>
                    </span>
                  </div>
                )}
                {project.code !== '' ? (
                  <a href={project.code} target="_blank" rel="noreferrer noopenner">
                    <span className="wrapper">
                      <span className="first">Review&nbsp;Code</span>
                      <span className="second">Review&nbsp;Code</span>
                    </span>
                  </a>
                ) : (
                  <div className="disabled_link">
                    <span className="wrapper">
                      <span className="first">Ask&nbsp;For&nbsp;Code</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="nav">
              <Link to={`/project/${project.prev.link}`}>&lt;&nbsp;{project.prev.name}</Link>
              <Link to={`/project/${project.next.link}`}>{project.next.name}&nbsp;&gt;</Link>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
      <div className="contact" id="contact">
        <Contact />
      </div>
      <div className="copyright" id="copyright">
        <Footer />
      </div>
    </>
  );
};

export default Project;
