import React from 'react';
import styled from 'styled-components';

import '../styles/PinkCard.css'
const Card = ({ title, description, buttonText }) => {
  return (
      <StyledWrapper>
        <div className="pink-card-container">
      <div className="pink-gradient-card">
        <h1 className="card-title">{title}</h1>
        <h2 className="card-description">{description}</h2>
        {buttonText && <button className="card-button">{buttonText}</button>}
      </div>
    </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    border-radius: 1rem;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }`;

export default Card;
