import React from 'react';
import banner1 from '../assests/images/banner-1.jpg'
import banner2 from '../assests/images/banner-2.jpg'
import banner3 from '../assests/images/banner-3.jpg'
import "../layout/header/Style.css";
function Banner() {
  return (
    <div className="width-100 margin-top-50">
      <div className="container">
        <div className="width-33">
          <BannerItem imageSrc={banner1}/>
        </div>
        <div className="width-33">
          <BannerItem imageSrc={banner2} />
        </div>
        <div className="width-33">
          <BannerItem imageSrc={banner3}/>
        </div>
      </div>
    </div>
  );
}

function BannerItem({ imageSrc }) {
  return (
    <div className="banner-list">
      <a href="#">
        <img className="wimg100" src={imageSrc} alt="banner" />
      </a>
    </div>
  );
}

export default Banner;
