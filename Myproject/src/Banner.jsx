import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ExampleCarouselImage from './ExampleCarouselImage';
import family from './assets/family.jpg';
import aquariumtank from './assets/aquariumtank.jpg';
import TropicalFish from './assets/TropicalFish.jpg';
import './Banner.css';

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner-carousel-wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        {/* Slide 1 */}
        <Carousel.Item>
          <ExampleCarouselImage src={TropicalFish} alt="Aquarium setup" />
          <div className="caption-wrapper">
            <h1>Welcome to AquaWorld!!!</h1>
            <p>
              Your destination for vibrant fish, custom tanks, expert care, lighting, live plants & more.
            </p>
            <Button variant="primary" size="lg">Shop Now</Button>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <ExampleCarouselImage src={aquariumtank} alt="Stylish Aquarium Tanks" />
          <div className="caption-wrapper">
            <h3>Stylish Aquarium Tanks</h3>
            <p>
              Durable, elegant designs to elevate your home decor and aquatic life.
            </p>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <ExampleCarouselImage src={family} alt="Happy Aquarium Families" />
          <div className="caption-wrapper">
            <h3>Bring Home Joy</h3>
            <p>
              Join happy families who love bringing underwater beauty to their homes.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;