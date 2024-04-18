import React, { useEffect } from 'react';
import '../assets/css/style.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'; // Adjust the path as necessary
import Header from '../components/PublicHeader'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS for AOS
import AboutImg from '../assets/img/aboutus.png';
import Somil from '../assets/img/Somil.jpeg';
import Charmy from '../assets/img/Charmy.jpeg';
import Akshaya from '../assets/img/Akshaya.jpeg';
import Manish from '../assets/img/Manish.jpeg';
import Nav from '../assets/img/Navdish.jpeg';

const About: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);


  return (
    <>
    <Header/>
      <section id="about" className="about section-bg" style={{ paddingTop: '15%'}}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
            <p>Learn More About Our Team and Culture</p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <img src={AboutImg} className="img-fluid" alt="About Us Image" style={{ borderRadius: '0.10rem' }} />
            </div>

            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="200">
              <h3 style={{ fontSize: '30px' }}>Our Vision & Mission</h3>
              <p className="fst-italic" style={{ fontSize: '22px' }}>
                <strong>At Blueboard, we're committed to transforming the way people and companies succeed together.</strong>
              </p>
              <ul style={{ fontSize: '20px' }}>
                <li><i className="bi bi-check-circle"></i> Innovate with customer-centric solutions.</li>
                <li><i className="bi bi-check-circle"></i> Empower teams across the globe.</li>
                <li><i className="bi bi-check-circle"></i> Build sustainable and scalable products.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section-bg" style={{}}>
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h2>Our Team</h2>
            <p>Meet the Innovators Behind Our Success</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-2 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><img src={Somil} className="card-img-top" alt="Somil Shah" /></div>
                <h4 className="title"><a href="">Somil Shah</a></h4>
                <p className="description">Product Manager</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><img src={Charmy} className="card-img-top" alt="Charmy Darji" /></div>
                <h4 className="title"><a href="">Charmy Darji</a></h4>
                <p className="description">Chief Technology Officer</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><img src={Akshaya} className="card-img-top" alt="Akshaya Gavhane" /></div>
                <h4 className="title"><a href="">Akshaya Gavhane</a></h4>
                <p className="description">Marketing Director</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon-box">
                <div className="icon"><img src={Manish} className="card-img-top" alt="Manish Kottamgiri" /></div>
                <h4 className="title"><a href="">Manish Kottamgiri</a></h4>
                <p className="description">Operations Manager</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="500">
              <div className="icon-box">
                <div className="icon"><img src={Nav} className="card-img-top" alt="Navdish Batra" /></div>
                <h4 className="title"><a href="">Navdish Batra</a></h4>
                <p className="description">Head of Sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default About;
