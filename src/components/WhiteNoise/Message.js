import React from 'react';
import './App1.css';

const Message = ({ audioCurrent }) => {
  return (
    <div className="Message">
      {audioCurrent.title ? 'now looping: ' + audioCurrent.title : ''}
    </div>
  );
}

export default Message;