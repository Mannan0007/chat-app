import React from 'react';
import styled from 'styled-components';
import git from '../images/git.png';   
import linkedinLogo from '../images/linkden.png';
import insta from '../images/insta.png';
import mail from '../images/mail.png'


const ContactButton = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <a className="social-link1" href="http://www.github.com/Mannan0007" target="_blank">
          <img src={git} alt="GitHub" className="logo" />
        </a>
        <a className="social-link2" href="http://linkedin.com/in/mannan-puri-7665b6207/" target="_blank">
          <img src={linkedinLogo} alt="LinkedIn" className="logo" />
        </a>
        <a className="social-link3" href="mailto:mannan.puri0052@gmail.com" target="_blank">
          <img src={mail} alt="mail" className="logo" />
        </a>
        <a className="social-link3" href="http://www.instagram.com/not._.mannan" target="_blank">
          <img src={insta} alt="insta"  style={{height:'170px'}} />
        </a>

      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    display: flex;

    justify-content: center;
    align-items: center;
    gap:120px
  }

  .card a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 160px;
    transition: 0.3s ease-in-out;
  }

  .card .logo {
    width: 240px;
    height: 180px;
    object-fit: cover;
  }

  .card a:hover {
    transform: scale(1.1);
    // background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default ContactButton;
