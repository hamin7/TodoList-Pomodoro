import React from 'react';
import './WhiteNoise.css';

const ListItem = ({ item, onClick, audioCurrent }) => {
  return (
    <div
      onClick={e => onClick(item)}
      className={audioCurrent === item ? 'audioCurrent' : ''}
    >
      {item.title}
    </div>
  );
}

export default ListItem;
