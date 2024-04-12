import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import elevationLogo from "./logo-color.png";
import "bootstrap/dist/css/bootstrap.min.css";

import { useAuth0 } from "@auth0/auth0-react";

const CustomNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { loginWithRedirect,isAuthenticated,user,isLoading } = useAuth0();
  const { logout } = useAuth0();
  useEffect(() => {
    setIsVisible(true);
  }, []);
  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    <>
      <div className={`back-nav ${isVisible ? "visible" : ""}`}>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <div style={{ paddingLeft: "10px" }}>
              <img src={elevationLogo} alt="Elevation Logo" className="navbar-logo" />
              <span
                className="navbar-brand-text"
                style={{ color: "#607EAA", textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}
              >
                M&A Groups
              </span></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-menu-icon" />
          <Navbar.Collapse className="navbar-links" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="navbar-button">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="navbar-button">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="navbar-button">
                SERVICES
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="navbar-button">
                CONTACT
              </Nav.Link>

              {
                isAuthenticated && (
      <div>
        <img src={user.picture} className="imgs" alt={user.name} />
       
        
      </div>
    )
              }
              {
                isAuthenticated ?<li >   <a className="navbar-button nav-link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                LOG OUT
              </a></li>:
              <li  > <a className="navbar-button nav-link" onClick={() => loginWithRedirect()}>LOG IN</a></li>
              }
             
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default CustomNavbar;
