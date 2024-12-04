import React from 'react';

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      <h3>Messages</h3>
      <ul>
        <li>{messages.message1}</li>
        <li>{messages.message2}</li>
        <li>{messages.message3}</li>
      </ul>
    </div>
  );
};

export default Messages;
