import React from "react";
import './ProfileCard.css'
const ProfileCard = ({ name, jobTitle, profileImage, socialLinks,linksimage }) => {
  return (
    <div className="profile-card">
      <img src={profileImage} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{jobTitle}</p>
      <div className="social-links">
        {/* {socialLinks.map((link, index) => (
        //   <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            // <img src={linksimage } alt={link.name} className="social-icon" />
          </a>
        ))} */}
      </div>
    </div>
  );
};

export default ProfileCard;
