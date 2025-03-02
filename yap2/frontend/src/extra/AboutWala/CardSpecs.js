import React from "react";
import styled from "styled-components";
import frontImage from './Assets/mannan_dp.jpg'
const FlipCard = ({
  frontImage,
  backImage,
  title,
  description,
  width = "190px",
  height = "254px",
}) => {
  return (
    <StyledWrapper width={width} height={height}>
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <img src={frontImage} alt="Front Side" className="card-image" />
            <p className="title">{title}</p>
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <img src={backImage} alt="Back Side" className="card-image" />
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
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    perspective: 1000px; /* Enables 3D effect */
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out; /* Smooth flipping */
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);
  }

  .flip-card-front {
    background-color: #ffeadb;
    border: 2px solid coral;
  }

  .flip-card-back {
    background-color: #ff9f80;
    border: 2px solid #ff5733;
    transform: rotateY(180deg);
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures full image coverage */
  }

  .title {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }

  .description {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1em;
    color: white;
    text-align: center;
    padding: 5px;
  }
`;

export default FlipCard;
