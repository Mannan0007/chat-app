import React from "react";
import { Button, Image } from "@chakra-ui/react";
// import logo from "../../../images/influencer_agency-removebg-preview.png";
import '../styles/NavBar.css'
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logoapna">
      </div>

      <div className="nav-links">
        <Link to={"/home"} id="home" >
          <IoIosHome  />
        </Link>
        <Link to={"/policy"}>Privacy Policy</Link>
        <Link to={"/contact-us"}>Contact Us</Link>
        <Link to={"/about-me"}>About the developer</Link>
        <Link to={"/about-us"}>About us</Link>
        <Link to={'/chats'}>Back to chats</Link>
      </div>
    </div>
  );
};

export default NavBar;
