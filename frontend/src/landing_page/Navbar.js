// import React from "react";
// import "./Navbar.css"; // Import the CSS file for styles

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#" id="logo-container">
//             <img
//               src="media_images/noctra_small_white_border.svg"
//               alt="logo"
//               id="logo"
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <a className="nav-link active text-white" aria-current="page" href="#">
//                 Home
//               </a>
//               <a className="nav-link text-white" href="#">
//                 Features
//               </a>
//               <a className="nav-link text-white" href="#">
//                 Pricing
//               </a>
//               <a className="nav-link disabled text-white" aria-disabled="true">
//                 Disabled
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div style={{ marginTop: "80px" }}></div>
//     </>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import the CSS file for styles
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" id="logo-container">
            <img
              src="media_images/noctra_small_white_border.svg"
              alt="NocTra"
              id="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link 
                className={`nav-link text-white ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
              <Link 
                className={`nav-link text-white ${location.pathname === '/aboutus' ? 'active' : ''}`} 
                to="/aboutus"
              >
                About
              </Link>
              <Link 
                className={`nav-link text-white ${location.pathname === '/pricing' ? 'active' : ''}`} 
                to="/pricing"
              >
                Pricing
              </Link>
            </div>
            <div className="ms-auto d-flex align-items-center">
              <Link to="/login" className={`nav-btn sign-in-btn me-3 ${location.pathname === '/login' ? 'active' : ''}`}>
                Log In
              </Link>
              <Link to="/signup" className={`nav-btn get-started-btn ${location.pathname === '/signup' ? 'active' : ''}`}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "100px" }}></div>
    </>
  );
}

export default Navbar;