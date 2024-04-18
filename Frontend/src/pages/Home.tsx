import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'; // Adjust the path as necessary
import Header from '../components/PublicHeader'; // Adjust the path as necessary
import HeroImg from '../assets/img/heroimg.jpg'; // Ensure this path is correct
import SolutionsCarousel from '../components/SolutionsCarousel'; // Adjust the path as necessary
import Services from '../components/Services'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS for AOS
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // values from 0 to 3000, with step 50ms
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <>
            <Header />
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Need all things project management? get onboard with Blueboard</h1>
                            <h2>Elevate Your Projects: Navigate, Collaborate, Succeed.</h2>
                            <div>
                                <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={HeroImg} className="img-fluid animated" alt="Hero" />
                        </div>
                    </div>
                </div>
            </section>
            <SolutionsCarousel />
            <Services />
            <Clients />
            <Contact/>
            <Footer />
        </>
    );
}

export default Home;
