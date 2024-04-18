import React, {useEffect} from 'react';
import Header from '../components/PublicHeader';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/pricing.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS for AOS

const Pricing: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);
  return (
    <>
    <Header />
        <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>Our Competitive Pricing Plans</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <h3>Business</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Unlimited storage</li>
                <li>Upload files up to 5GB</li>
                <li>Basic support</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box recommended" data-aos="zoom-in" data-aos-delay="200">
              <span className="recommended-badge">Recommended</span>
              <h3>Business Plus</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Unlimited storage</li>
                <li>Upload files up to 15GB</li>
                <li>Priority support</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
              <h3>Enterprise</h3>
              <h4><sup>$</sup>99<span> / month</span></h4>
              <ul>
                <li>Unlimited storage</li>
                <li>Upload files up to 50GB</li>
                <li>24/7 support</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
    
  );
};

export default Pricing;
