import React from 'react';
import UserInfo from './Components/UserInfo';
import Statistics from './Components/Statistics';
import Messages from './Components/Messages';

function App() {
  const user = {
    name: "Abdul Rehman",
    email: "24g-bcs474@student.agu.edu.pk",
    role: "Admin",
    profilePicture: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", // Placeholder profile image
  };

  const statistics = {
    totalUsers: 1000,
    activeUsers: 700,  // Active users out of total
    newSignups: 150,
  };

  const messages = {
    message1: "Updates are Available.",
    message2: "You have 5 new notifications.",
    message3: "New Assignment Assign to you.",
  };

  return (
    <div className="app-container">
      <div className="component-container">
        <UserInfo user={user} />
        <Statistics statistics={statistics} />
        <Messages messages={messages} />
      </div>
    </div>
  );
}

export default App;
