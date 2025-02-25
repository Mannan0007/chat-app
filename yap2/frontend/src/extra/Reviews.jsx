import React from 'react';
import styled from 'styled-components';

const ReviewCard = ({ name, review, rating, image }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="header">
          <img className="image" src={'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Free-PNG-Clip-Art.png'} alt={name} />
          <div>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  fill={i < rating ? "currentColor" : "lightgray"} 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="name">{name}</p>
          </div>
        </div>
        <p className="message">{review}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    background-color: rgba(243, 244, 246, 1);
    padding: 2rem;
    max-width: 320px;
    border-radius: 10px;
    box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .header .image {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .stars {
    display: flex;
    gap: 0.125rem;
    color: rgba(34, 197, 94, 1);
  }

  .stars svg {
    height: 1rem;
    width: 1rem;
  }

  .name {
    margin-top: 0.25rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: rgba(55, 65, 81, 1);
  }

  .message {
    margin-top: 1rem;
    color: rgba(107, 114, 128, 1);



  }

  background-color: rgba(243, 244, 246, 1);
  padding: 1rem;
  max-width: 320px;
  border-radius: 10px;
  box-shadow: 0 20px 30px -20px rgba(5, 5, 5, 0.24);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;  /* Smooth transitions */
  
  &:hover {
    transform: scale(1.05);  /* Slightly enlarge the card */
    box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.1);  /* Increase shadow on hover */
    background-color: rgba(225, 225, 225, 1);  /* Change background color on hover */
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stars {
    display: flex;
    gap: 0.125rem;
    color: rgba(34, 197, 94, 1);
  }

  .stars svg {
    height: 1rem;
    width: 1rem;
  }

  .name {
    font-size: 1.125rem;
    font-weight: 600;
    color: rgba(55, 65, 81, 1);
    margin-top: 0.25rem;
  }

  .message {
    margin-top: 1rem;
    color: rgba(107, 114, 128, 1);
    font-size: 0.875rem;
  }
`;
export default ReviewCard;
