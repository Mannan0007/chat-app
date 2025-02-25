import React from 'react';
import '../styles/AboutMe.css';
import { Button, Image,Text } from "@chakra-ui/react";
import Card from './PinkCard.jsx';
import java from '../../src/images/java.png'
import cpp from '../../src/images/cpp.png'
import c from '../../src/images/c.png'
import javascript from '../../src/images/js.png'
import react from '../../src/images/react.png'
import nodejs from '../../src/images/nodejs.png'
import mongodb from '../../src/images/mongodb.png'
import sql from '../../src/images/sql.png'
import git from '../../src/images/git.png'
import html from '../../src/images/html.png'
import css from '../../src/images/css.png'
import pyhton from '../../src/images/python.png'
import ProfileCard from './PictureCard.jsx';
import FlipCard from './SkillCard';
import dp from '../../src/images/mannan_dp.jpg'
import LinCard from './LinCard.jsx'
import ContactButton from './ContactMe.jsx';
import AnimatedContent from './AnimatedContent.jsx';
// import vid from '../../src/images/vecteezy_minimal-stars-motion-loop-background-for-project-overlay_2016656.mov'





const AboutMe = () => {
  return (
    <>
      <div className="port-bg">
        <AnimatedContent>
          <div className="mannan-heading">
            <h1>About the Developer</h1>
          </div>

          <h2 className="intro">Hey there! I'm Mannan Puri</h2>

          <div className="content">
            <LinCard />

            <div className="meracard">
              <ProfileCard
                name="Mannan"
                jobTitle="Full Stack Developer"
                profileImage={dp}
                socialLinks={[
                  {
                    name: "GitHub",
                    url: "https://github.com/Mannan0007",
                    img: { git },
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/mannan-puri-7665b6207/",
                    icon: "linkedin-icon.png",
                  },
                ]}
              />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent>
          <div className="contact-heading">
            <h1>Contact Me</h1>
          </div>

          <div className="contact-me">
            <ContactButton />
          </div>
        </AnimatedContent>

        <AnimatedContent>
          <div className="skills-heading">
            <h1>Skills</h1>
          </div>
          <div className="skills">
            <FlipCard
              image={java}
              title="Java"
              description="Solved 150+ Leetcode problems using Java."
            />
            <FlipCard
              image={cpp}
              title="C++"
              description="Solved DSA with C++ in my 3rd year ."
            />
            <FlipCard
              image={c}
              title="C"
              description="Fundamentals of C programming."
            />
            <FlipCard
              image={javascript}
              title="JavaScript"
              description="Experienced in JS for frontend and backend."
            />
            <FlipCard
              image={react}
              title="React JS"
              description="Developed interactive UIs with React. Created 15+ Projects in React"
            />
            <FlipCard
              image={nodejs}
              title="Node.js"
              description="Built REST APIs using Node.js and Express."
            />
            <FlipCard
              image={mongodb}
              title="MongoDB"
              description="Worked with NoSQL databases for backend."
            />
            <FlipCard
              image={sql}
              title="SQL"
              description="Designed relational databases using SQL."
            />
            <FlipCard
              image={git}
              title="Git"
              description="Version control experience with Git and GitHub."
            />
            <FlipCard
              image={html}
              title="Html"
              description="Started my Web Development journey using HTML."
            />
            <FlipCard
              image={css}
              title="CSS"
              description="Started my Web Development journey using HTML"
            />
            <FlipCard
              image={pyhton}
              title="Python"
              description="Made 2 AI-ML projects using Python libraries such as Panda and NumPy "
            />
          </div>
        </AnimatedContent>

        <AnimatedContent>
          <h1 className="projects-heading">My Projects</h1>

          <div className="projects">
            <Card
              title={"Chat website"}
              description={
                "Cloud Connect a real time based chat application which allows users to connect with people anytime and anywhere"
              }
            />

            <Card
              title={"Booking Website"}
              description={
                "GoVenture is a Full stack website that allows users to book and explore beautiful places and packages"
              }
            />

            <Card
              title={"Campus Sync"}
              description={
                "Campus Sync is a well maintained and full stack website that helps the students and teacher to manage the task perfectly"
              }
            />

            <Card
              title={"Fashion website"}
              description={
                "OneStop is a beautiful frontend based website with variety of clothes and fashion related items including billing system"
              }
            />

            <Card
              title={"Spotify Clone"}
              description={
                "OneStop is a beautiful frontend based website with variety of clothes and fashion related items including billing system"
              }
            />

            <Card
              title={"Face-Emotion Detector"}
              description={
                "OneStop is a beautiful frontend based website with variety of clothes and fashion related items including billing system"
              }
            />

            <Card
              title={"Cafe Management System"}
              description={
                "OneStop is a beautiful frontend based website with variety of clothes and fashion related items including billing system"
              }
            />

            <Card
              title={"E-Commerce website"}
              description={
                "OneStop is a beautiful frontend based website with variety of clothes and fashion related items including billing system"
              }
            />
          </div>
        </AnimatedContent>
      </div>
    </>
  );
};

export default AboutMe;
