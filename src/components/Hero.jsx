import { ReactComponent as Decore } from '../assets/icons/decore.svg';
import Social from "./Social";
import Three from '../assets/images/3.jpg';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${Three})`,
          }}></div>
        <div className="overlay"></div>
      </div>

      <div className="go-to go-to-next">
        <a href="#portfolio" aria-label='go to portfolio section'>
          <span></span>
        </a>
      </div>

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
              Hi! I'm Maverick
            </h3>
            <h1 className="job" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
              <p className="loop-text lead">Web Developer</p>
              <span>Based In Florida</span>
            </h1>
            <p className="text" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
              I remotely design, build, and publish responsive web interactions that help people
              achieve their dreams.
            </p>
            <div
              className="mobile_social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150">
              <Social share={true} />
            </div>

            <div
              className="button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200">
              <a className="anchor" href="#portfolio">
                <span className="wrapper">
                  <span className="first">See Portfolio</span>
                  <span className="second">See Portfolio</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="social" data-aos="fade-left" data-aos-duration="1200">
        <Social />
      </div>
      <Decore />
    </div>
  );
};

export default Hero;
