import React from 'react';
import styled from 'styled-components';

const LinCard = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color" />
            <button className="btn" />
            <button className="btn" />
          </div>
          <p className="user"></p>
          <div className="add_tab">
            +
          </div>
        </div>
        <div className="terminal_body">
          <div className="terminal_promt">
            <span className="terminal_user">mannan@admin:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$  I am a passionate Full-Stack Web Developer and a 3rd-year Computer Science student at Chitkara University. 
          <br />
          My journey in tech started in 2022, and since then, I've been crafting dynamic and efficient web applications. 
          With expertise in front-end and back-end development, I enjoy crafting efficient digital solutions that enhance user experiences. Beyond coding, I am a curious learner, always exploring new technologies and trends in the ever-evolving world of web development.

Apart from my love for programming, I am a people person who thrives in collaborative environments. I enjoy engaging with fellow developers, exchanging ideas, and working on innovative projects. Outside of tech, I am an avid traveler, always eager to explore new places, cultures, and experiences.

I’m constantly seeking opportunities to learn, grow, and contribute to exciting projects that push the boundaries of technology. </span>
                      <span className="terminal_cursor" />
                      
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 250px;
    height: 250px;
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #212121;
    justify-content: space-between;
    width: 70pc;
  }

  .butt {
    display: flex;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
  }

  .btn-color {
    background: #ee411a;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .butt--exit {
    background: linear-gradient(#f37458 0%, #de4c12 100%);
  }

  .add_tab {
    border: 1px solid #fff;
    color: #fff;
    padding: 0 6px;
    border-radius: 4px 4px 0 0;
    border-bottom: none;
    cursor: pointer;
  }

  .user {
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
  }

  .terminal_body {
    background: rgba(0, 0, 0, 0.6);
    height: calc(100% - 30px);
    width:70pc;
    padding-top: 2px;
    margin-top: -1px;
    font-size: 16px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .terminal_promt {
    display: flex;
  }

  .terminal_promt span {
    margin-left: 4px;
  }

  .terminal_user {
    color: #1eff8e;
  }

  .terminal_location {
    color: #4878c0;
  }

  .terminal_bling {
    color: #dddddd;
  }

  .terminal_cursor {
    display: block;
    height: 14px;
    width: 5px;
    margin-left: 10px;
    animation: curbl 1200ms linear infinite;
  }

  @keyframes curbl {

    0% {
      background: #ffffff;
    }

    49% {
      background: #ffffff;
    }

    60% {
      background: transparent;
    }

    99% {
      background: transparent;
    }

    100% {
      background: #ffffff;
    }
  }`;

export default LinCard;
