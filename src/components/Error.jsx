import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + 'img/1.jpg'})`,
        }}>
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            The page you are looking for could not be found.
          </p>

          <div
            className="button color"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100">
            <Link to="/">
              <span className="wrapper">
                <span className="first">BACK TO HOME</span>
                <span className="second">BACK TO HOME</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
