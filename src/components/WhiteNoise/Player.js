import React from 'react';

const Player = ({ file }) => {
  return (
    <div>
      <audio controls='controls' loop='true' autoPlay>
        <source src={file} />
      </audio>
    </div>
  );
}

export default Player;