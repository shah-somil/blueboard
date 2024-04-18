import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/style.css";

import client1 from '../assets/img/clients/client-1.png';
import client2 from '../assets/img/clients/client-2.png';
import client3 from '../assets/img/clients/client-3.png';
import client4 from '../assets/img/clients/client-4.png';
import client5 from '../assets/img/clients/client-5.png';
import client6 from '../assets/img/clients/client-6.png';
import client7 from '../assets/img/clients/client-7.png';
import client8 from '../assets/img/clients/client-8.png';
import client9 from '../assets/img/clients/client-9.png';

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Clients</h2>
          <p>They trusted us</p>
        </div>
        <Slider {...settings}>
          <div><img src={client1} alt="Client 1" className="img-fluid" /></div>
          <div><img src={client2} alt="Client 2" className="img-fluid" /></div>
          <div><img src={client3} alt="Client 3" className="img-fluid" /></div>
          <div><img src={client4} alt="Client 4" className="img-fluid" /></div>
          <div><img src={client5} alt="Client 5" className="img-fluid" /></div>
          <div><img src={client6} alt="Client 6" className="img-fluid" /></div>
          <div><img src={client7} alt="Client 7" className="img-fluid" /></div>
          <div><img src={client8} alt="Client 8" className="img-fluid" /></div>
          <div><img src={client9} alt="Client 9" className="img-fluid" /></div>

        </Slider>
      </div>
    </section>
  );
};

export default Clients;
