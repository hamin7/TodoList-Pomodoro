import React from 'react';
import './WhiteNoise.css';

const Message = ({ audioCurrent }) => {
  return (
    <div className="Message">
      {audioCurrent.title ? '현재 재생: ' + audioCurrent.title : ''}
    </div>
  );
}

export default Message;