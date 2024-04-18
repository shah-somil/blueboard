// import React from 'react';

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div className="footer-top">
//         <div className="container">
//           <div className="row">
//             {/* Footer content can be similarly broken down into smaller components or further detailed here */}
//           </div>
//         </div>
//       </div>
//       <div className="container py-4">
//         <div className="copyright">
//           &copy; Copyright <strong><span>Blueboard</span></strong>. All Rights Reserved
//         </div>
//         <div className="credits">
//           Designed by N-SCAM
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { ReactComponent as Chevron } from 'bootstrap-icons/icons/chevron-right.svg';
import { ReactComponent as Twitter } from 'bootstrap-icons/icons/twitter-x.svg';
import { ReactComponent as Facebook } from 'bootstrap-icons/icons/facebook.svg';
import { ReactComponent as Instagram } from 'bootstrap-icons/icons/instagram.svg';
import { ReactComponent as Linkedin } from 'bootstrap-icons/icons/linkedin.svg';


const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Insights at Your Fingertips</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Blueboard</h3>
              <p>
                A108 Huntington Street <br />
                Boston, MA 02115<br />
                United States <br /><br />
                <strong>Phone:</strong> <a href="tel:+18571234567">+1 857 123 4567</a> <br />
                <strong>Email:</strong> <a href="mailto:info@blueboard.com">info@blueboard.com</a><br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><Chevron/><a href="#">Home</a></li>
                <li><Chevron/> <a href="#">About us</a></li>
                <li><Chevron/> <a href="#">Services</a></li>
                <li><Chevron/> <a href="#">Terms of service</a></li>
                <li><Chevron/> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Solutions</h4>
              <ul>
                <li><Chevron/> <a href="#">Scrum Board</a></li>
                <li><Chevron/> <a href="#">Team Messages</a></li>
                <li><Chevron/> <a href="#">My Schedule</a></li>
                <li><Chevron/> <a href="#">Detail Task View</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Together, We're More: Join our social network to be part of a community that believes in the power of unity and shared experiences.</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><Twitter/></a>
                <a href="#" className="facebook"><Facebook/></a>
                <a href="#" className="instagram"><Instagram/></a>
                <a href="#" className="linkedin"><Linkedin/></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright <strong><span>Blueboard</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by N-SCAM
        </div>
      </div>
    </footer>
  );
};

export default Footer;
