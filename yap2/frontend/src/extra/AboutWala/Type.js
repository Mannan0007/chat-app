import React from "react";
import Typewriter from "typewriter-effect";
import "./aboutStyles.css";

function Type() {
  return (
    <>
    
{/*     
    <h3>
      I am a
    </h3>   */}
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "A quick Learner",
          "Tech Enthusiast ",
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </>
  );
}

export default Type;
