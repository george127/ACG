import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css'; // Import CSS file for the carousel styles
import image1 from "./image/beal.png"
import image2 from "./image/orangenew.png"
import image3 from "./image/IMG_0418.jpg"
import image4 from "./image/solace.png"
import image5 from "./image/cloud.png"



function MyCarousel() {
  return (
     <Carousel slide={false}>
      <Carousel.Item>
        <img
          src={image1} // Replace with your image URL
          alt="First slide" className='carousel-image'
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img src={image2} // Replace with your image URL
          alt="Second slide" className='carousel-image'
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          src={image3} // Replace with your image URL
          alt="Third slide" className='carousel-image'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image4} // Replace with your image URL
          alt="Third slide" className='carousel-image'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image5} // Replace with your image URL
          alt="Third slide" className='carousel-image'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
