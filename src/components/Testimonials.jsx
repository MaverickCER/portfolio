import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';
import Carousel from 'nuka-carousel';
import LunulaLyra from '../assets/images/lunulalyra.webp';
import Mark from '../assets/images/mark.webp';
import Paige from '../assets/images/paige.webp';
import { ReactComponent as Quote } from '../assets/icons/quote.svg';
import Stacy from '../assets/images/stacy.webp';

const testimonialsContent = [
  {
    img: Stacy,
    desc: `Maverick's genuine nature, willingness to help others and leadership abilities are to be admired. I have no doubt that he will continue to be a success in anything he sets out to do. I hope you strongly consider him for your next project.`,
    name: 'Dr. Malaret',
    designation: 'LEAD Scholars Academy Director',
  },
  {
    img: Mark,
    desc: `He helped get my business online and now every time I return to the office I have half a dozen inquiries. I have no regrets and am happy to say that the bottleneck of our production has shifted towards material availability!`,
    name: 'Mark',
    designation: 'CEO of First Class Tile Inc.',
  },
  {
    img: Paige,
    desc: `My new landing page shows my latest work as soon as I post to instagram, helps get my brand out there for anyone searching in the area, and turns one of my location's biggest weaknesses into a strength! <3`,
    name: 'Paige',
    designation: 'Cosmetologist',
  },
  {
    img: LunulaLyra,
    desc: 'Supportive all the way and was very communicative. I was impressed by the speed and quality of the work!',
    name: 'Lunula Lyra',
    designation: 'Entrepreneur',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div
          className="testimonials_list"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100">
          <Carousel
            wrapAround={true}
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>
                <Arrow />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>
                <Arrow />
              </button>
            )}>
            {testimonialsContent.map((val, i) => (
              <div className="item" key={i}>
                <div className="list_inner">
                  <span className="left">
                    <img src={val.img} alt={val.name} />
                  </span>
                  <span className="right">
                    <Quote style={{ color: '#f52225' }} />
                    <p className="text">{val.desc}</p>
                    <div className="details">
                      <h3 className="name">
                        <span>{val.name}</span>
                      </h3>
                      <span className="job">{val.designation}</span>
                    </div>
                  </span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
