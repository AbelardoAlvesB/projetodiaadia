import React from "react";
import IMG1 from './img/uniac3.jpg';
import IMG2 from './img/uniac2.jpg';
import Carousel from 'react-bootstrap/Carousel';

function Main(props) {
    return (      
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={IMG1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={IMG2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    );
  }
  
  export default Main;