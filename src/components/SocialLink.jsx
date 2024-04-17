import React from 'react';
import './SocialLink.css'; // Ensure you have this CSS file for styling

const SocialLink = ({ name, url }) => {
  return (
    <a href={url} className="social-link" target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
}

export default SocialLink;
