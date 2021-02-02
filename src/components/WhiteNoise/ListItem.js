import React from 'react';
import './WhiteNoise.css';

const ListItem = ({ item, onClick, audioCurrent }) => {
  return (
    <div
      onClick={e => onClick(item)}
      className={audioCurrent === item ? 'audioCurrent' : ''}
    >
      {/* {item.title} */}
      <img src={ item.img  } width='40' height='40'/>
    </div>
  );
}

export default ListItem;
