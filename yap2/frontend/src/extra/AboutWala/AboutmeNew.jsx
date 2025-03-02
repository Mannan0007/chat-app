import React from 'react'
import Home from './Home'
import About from './About/About.js'
import Projects from './Projects/Projects.js'
import Aurora from './Aurora.js'
const AboutmeNew = () => {
  return (
    <>
      <div>
        {/* <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        /> */}
        <Home />
      </div>
      <About />
      {/* <Projects/> */}
    </>
  );
}

export default AboutmeNew;
