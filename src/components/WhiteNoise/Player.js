import React from 'react';

const Player = ({ file }) => {
  return (
    <div>
      <audio controls='controls' loop='true'>
        <source src={file} />
      </audio>
    </div>
  );
}

export default Player;