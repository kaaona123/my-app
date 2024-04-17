import React from 'react';
import Profile from './components/Profile';
import SocialLink from './components/SocialLink';
import './App.css'; // Your main styling

function App() {
  const profileInfo = {
    name: "Robby Langley",
    location: "Mesa, Arizona",
    bio: "Front-end developer and avid reader."
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Frontend Mentor", url: "https://www.frontendmentor.io" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    // Add more social links here...
  ];

  return (
    <div className="app">
      <div className="card"> {/* Card container */}
        <Profile {...profileInfo} />
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;

