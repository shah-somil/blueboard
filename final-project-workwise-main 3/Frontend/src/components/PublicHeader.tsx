import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-fullwidth.png';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
        <Navbar bg="light" expand="lg" fixed="top" id="header" className="align-items-center">
          <Container className="d-flex justify-content-between">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img src={logo} alt="Logo" className="logo img-fluid" style={{ maxHeight: '40px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-nav-toggle" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us" className="nav-link">About Us</Nav.Link>
                <Nav.Link as={Link} to="/#solutions" className="nav-link">Solutions</Nav.Link>
                <Nav.Link as={Link} to="/pricing" className="nav-link">Pricing</Nav.Link>
                <Nav.Link as={Link} to="/#contact" className="nav-link">Contact</Nav.Link>
                <Nav.Link as={Link} to="/login" className="getstarted scrollto">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default Header;
    
//     <Navbar id='' bg="light" expand="lg" fixed="top" className="d-flex align-items-center">
//       <Container className="d-flex align-items-center justify-content-between">
//         <Navbar.Brand href="/">
//           <img src={logo} alt="Logo" className="img logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <LinkContainer to="/">
//               <Nav.Link>Home</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/about-us">
//               <Nav.Link>About Us</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/solutions">
//               <Nav.Link>Solutions</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/contact">
//               <Nav.Link>Contact</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <Nav.Link>Login</Nav.Link>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

// const Header = () => {
//   return (
//     <header id="header" className="fixed-top d-flex align-items-center">
//       <div className="container d-flex align-items-center justify-content-between">
//         <div className="logo">
//           <Link to="/"><img src={logo} alt="Logo" className="img-fluid" /></Link>
//         </div>

//         <nav id="navbar" className="navbar">
//           <ul>
//             <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
//             <li><Link className="nav-link scrollto" to="/about-us">About Us</Link></li>
//             <li><Link className="nav-link scrollto" to="/solutions">Solutions</Link></li>
//             <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
//             <li><Link className="getstarted scrollto" to="/login">Login</Link></li>
//           </ul>
//           <i className="bi bi-list mobile-nav-toggle"></i>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
