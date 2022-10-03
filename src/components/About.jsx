import Skills from './Skills';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="title_holder">
          <span>About Me</span>
          <h2>About Me</h2>
        </div>
        <div className="about_inner">
          <div className="left" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
            <div className="title_holder">
              <span>Motivation</span>
            </div>
            I am primarily motivated by helping others, learning new things, and seeing how my work
            fits into the big picture. SWMC's Morgan is changing the mortgage industry and helping
            improve the lives of others. It also allowed me to assist with design and development in
            all aspects of it's version 1.0 rebuild.
          </div>
          <div
            className="right"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100">
            <div className="title_holder">
              <span>Vision</span>
            </div>
            <span>Consume, Enhance, Replicate</span> This directive guides my development process
            and pushes me to keep improving. Consume knowledge, materials, and inspiration. Enhance
            these concepts with existing tools and associations. Replicate this process for
            continual growth.
          </div>
        </div>
      </div>
      <Skills />
      <Testimonials />
    </>
  );
};

export default About;
