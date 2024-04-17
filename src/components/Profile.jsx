import React from 'react';
import './Profile.css'; // Ensure you have this CSS file for styling
import avatar from '/Users/robbylangley/Downloads/social-links-profile-main/my-app/src/robby.jpg'

const Profile = ({ name, bio, location }) => {
  return (
    <div className="profile">
      <img src={avatar} alt="Profile avatar" className="profile-avatar" />
      <h1>{name}</h1>
      <p>{location}</p>
      <br></br>
      <p>{bio}</p>
    </div>
  );
}

export default Profile;

