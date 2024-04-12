import React from "react";
import { Toolbar, Typography, AppBar } from "@mui/material"; // Import AppBar from Material-UI
import elevationLogo from "./logo-color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <AppBar position="static" className="footer">
      <Toolbar>
        <div className="footer-main">
          <div className="footer-logo">
            <img src={elevationLogo} alt="Logo" />
            <Typography variant="h6" component="span" className="company-name">
              M&amp;A Groups
            </Typography>
          </div>

          <div className="social-media-icons">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            {/* Add other social media icons */}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
