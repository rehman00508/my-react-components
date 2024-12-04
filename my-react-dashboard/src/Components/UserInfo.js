import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <img src={user.profilePicture} alt="Profile" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span className={`role ${user.role.toLowerCase()}`}>{user.role}</span>
    </div>
  );
};

export default UserInfo;
