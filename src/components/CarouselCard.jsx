import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function CarouselCard() {
  return (
    <div className="d-flex justify-content-center">
      <div className="carousel-wrapper">
        <Carousel>
          <Carousel.Item>
            <Link to="/lists/topmovies">
              <img
                className="d-block w-100 carousel-image"
                src="/images/shawshank-redemption-prison-break-2.webp"
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Top Movies of All Times</h3>
              <p>Unforgettable stories on the silver screen.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/lists/mostpopular">
              <img
                className="d-block w-100 carousel-image"
                src="/images/mission-impossible.jpeg"
                alt="Second slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Most Popular Movies</h3>
              <p>The blockbusters that captivate the world.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="lists/theater">
              <img
                className="d-block w-100 carousel-image"
                src="/images/killers-flower-moon.webp"
                alt="Third slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Theater Movies</h3>
              <p>Immerse yourself in the magic of the big screen.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="lists/comingsoon">
              <img
                className="d-block w-100 carousel-image"
                src="/images/radical-the-movie.webp"
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Coming Soon</h3>
              <p>Get ready for the next cinematic masterpiece.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselCard;
