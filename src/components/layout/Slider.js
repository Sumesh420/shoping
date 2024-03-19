import React from 'react';
import "../layout/header/Style.css";
import Mintu from '../assests/images/slider-1.jpg';

const Slider = () => {
  return (
    <div className="width-100 image">
        <div className="container">
            <div className="slider">
      <img src={Mintu} className="img" alt="mobileimage"/>
    </div>
    </div>
    </div>
  );
};

export default Slider;
