import React from 'react';
import '../styles/GradientCard.css'

const GradientCard = ({ title, description, buttonText }) => {
  return (
    <div className="card-container">
      <div className="gradient-card">
        <h1 className="card-title">{title}</h1>
        <h2 className="card-description">{description}</h2>
        {buttonText && <button className="card-button">{buttonText}</button>}
      </div>
    </div>
  );
};

export default GradientCard;
