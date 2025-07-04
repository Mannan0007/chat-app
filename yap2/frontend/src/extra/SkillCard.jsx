import React from 'react';
import styled from 'styled-components';

const FlipCard = ({ image, title, description, width = "190px", height = "254px" }) => {
  return (
    <StyledWrapper width={width} height={height}>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <img src={image} alt={title} className="skill-logo" />
            <p className="title">{title}</p>
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    perspective: 1000px;
    font-family: sans-serif;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
    padding: 10px;
  }

  .flip-card-front {
    background: rgba(255, 255, 255, 0.2); /* White with 20% opacity */
    color: white; /* Solid white text */
    backdrop-filter: blur(5px); /* Optional: Frosted glass effect */
  }

  .flip-card-back {
    background: rgba(255, 255, 255, 0.2); /* White with 20% opacity */
    color: white; /* Solid white text */
    transform: rotateY(180deg);
    backdrop-filter: blur(5px); /* Optional: Smooth translucent effect */
  }

  .skill-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .title {
    font-size: 1.2em;
    font-weight: 700;
    margin-top: 10px;
  }

  .description {
    font-size: 0.9em;
    font-weight: 400;
    text-align: center;
    padding: 10px;
  }
`;

export default FlipCard;
