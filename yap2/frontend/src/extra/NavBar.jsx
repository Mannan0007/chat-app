import React from "react";
import { Button, Image } from "@chakra-ui/react";
// import logo from "../../../images/influencer_agency-removebg-preview.png";
import '../styles/NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logoapna">
        {/* <Image src={logo} className="logo" /> */}
      </div>

          <div className="nav-links">
              <Link to={'/policy'}>Privacy Policy</Link>
              <Link to={'/contact-us'}>Contact Us</Link>
              <Link to={'/about-me'}>About the developer</Link>
              
          </div>



    </div>
  );
};

export default NavBar;
