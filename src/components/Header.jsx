import React, { useEffect, useState } from 'react';

import { ReactComponent as About } from '../assets/icons/about.svg';
import { ReactComponent as Contact } from '../assets/icons/contact.svg';
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Portfolio } from '../assets/icons/portfolio.svg';
import Scrollspy from 'react-scrollspy';

const Header = ({ isDark }) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <>
      <div className={`topbar${navbar ? ' animate' : ''}${isDark ? ' dark' : ''}`}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">MaverickCER</Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={['home', 'portfolio', 'about', 'contact']}
                currentClassName={isDark ? '' : 'current'}
                offset={-100}>
                <li className={isDark ? '' : 'current'}>
                  <a href="/#home">
                    <span className="first">Home</span>
                    <span className="second">Home</span>
                  </a>
                </li>
                <li>
                  <a href="/#portfolio">
                    <span className="first">Portfolio</span>
                    <span className="second">Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="/#about">
                    <span className="first">About</span>
                    <span className="second">About</span>
                  </a>
                </li>
                <li className={isDark ? 'current' : ''}>
                  <a href="#contact">
                    <span className="wrapper">
                      <span className="first">Contact</span>
                      <span className="second">Contact</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={['home', 'portfolio', 'about', 'contact']}
          currentClassName={isDark ? '' : 'current'}
          offset={-100}>
          <li>
            <a href="/#home">
              <Home />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/#portfolio">
              <Portfolio />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="/#about">
              <About />
              <span>About</span>
            </a>
          </li>
          <li className={isDark ? 'current' : ''}>
            <a href="#contact">
              <Contact />
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
      </div>
    </>
  );
};

export default Header;
