import React from "react";
import '../styles/AboutUs.css'
import { Text } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="content-aboutus">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
        About us{" "}
      </h1>
        <Text style={{ fontSize: "20px", margin: "2pc" }}>
          Welcome to Clout Connect, the next-generation social messaging
          platform designed to keep you engaged, connected, and in control.
          Whether you're chatting with friends, building communities, or
          networking with influencers, Clout Connect provides a secure, fast,
          and interactive messaging experience.
        </Text>
        <Text style={{ fontSize: "18px", margin: "2pc" }}>
          At Clout Connect, we are redefining the way people communicate and
          build communities online. Our platform is designed to seamlessly
          connect users across the globe, providing a secure, intuitive, and
          feature-rich messaging experience. Whether you're an individual
          looking to stay in touch with friends or an influencer growing your
          digital presence, Clout Connect is built to empower your
          conversations.
        </Text>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          Our Goals🌍{" "}
        </h1>
        <Text
          style={{
                      display: "flex",
              flexDirection:'column',
            fontSize: "18px",
                      // margin: "4pc",
            marginTop:"20px", 
            gap: "40px",
          }}
        >
          <Text>
            Global Connectivity – We aim to create a platform where
            communication knows no boundaries, making it easier for people to
            connect and collaborate effortlessly. 🔒{" "}
          </Text>
          <Text>
            Privacy & Security First – Your data and conversations are our top
            priority. We implement end-to-end encryption and industry-leading
            security measures to ensure your privacy. 🚀
          </Text>
          Innovation & User Experience – We are committed to continuous
          innovation, integrating advanced features like AI-driven chat
          enhancements, smart notifications, and seamless media sharing for an
          enriched messaging experience.
                  <Text>
                      
          👥 Building Stronger Communities – More than just messaging, we strive
          to bridge gaps, foster engagement, and empower creators and
          influencers with tools to grow their audience.
        </Text>
        </Text>
          </div>
          <Footer/>
    </>
  );
};

export default AboutUs;
