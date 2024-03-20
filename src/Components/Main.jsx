import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Immagine from '../Img/Immagine.png';
import ModelS from '../Img/ModelS.jpg';
import Model3 from '../Img/Model3.jpg';
import ModelX from '../Img/ModelX.jpg';
import ModelY from '../Img/ModelY.jpg';
import CyberTruck from '../Img/Cybertruck.jpg';
function Main() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={ModelS}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Model S</h3>
          <p>S stands for Slick</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Model3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Model 3 </h3>
          <p>Innovation. Design. Power.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={ModelX}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Model X</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={ModelY}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Model Y</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={CyberTruck}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Cyber-Truck</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;
