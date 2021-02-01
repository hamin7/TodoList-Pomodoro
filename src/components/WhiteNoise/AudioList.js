import React from 'react';
import ListItem from './ListItem';
import './App1.css';

const AudioList = ({ list, onClick, audioCurrent }) => {

  const renderList = list.map((item, i) => {
    return (
      <ListItem
        key={i}
        item={item}
        onClick={onClick}
        audioCurrent={audioCurrent}
      />
    );
  })

  return (
    <div className="AudioList">
      {renderList}
    </div>
  );
}

export default AudioList;