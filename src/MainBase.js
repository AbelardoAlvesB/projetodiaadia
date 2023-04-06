import React from "react";
import IMG1 from './img/uniac3.jpg';
import IMG2 from './img/uniac2.jpg';
import Carousel from 'react-bootstrap/Carousel';

function MainBase() {
   return(
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
   )
    
}
  
export default MainBase;