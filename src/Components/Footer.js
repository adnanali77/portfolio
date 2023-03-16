import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a  href="https://pk.linkedin.com/in/muhammad-adnan-ali-53ba631b1" target="_blank">
          <LinkedInIcon />
        </a>
        <TwitterIcon />
        <GitHubIcon />
      </div>
      <p> &copy; Adnan Ali</p>
    </div>
  );
}

export default Footer;