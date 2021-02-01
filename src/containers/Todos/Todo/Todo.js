import React, { useState } from 'react';
import styled from 'styled-components';

import DeleteTodo from '../DeleteTodo/DeleteTodo';
import InputTodo from '../InputTodo/InputTodo';
import workingIMG from '../../../assets/currentJob.png';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 4rem 3rem;
  background-color: var(--color-mainLight);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin-bottom: 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-white);
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const editStyles = {
  color: 'var(--color-main)',
  margin: '0 .5rem',
  cursor: 'pointer',
};

const deleteStyles = {
  color: 'var(--color-errorRed)',
  margin: '0 .5rem',
  cursor: 'pointer',
};

const currentStyles = {
  color: 'var(--color-errorRed)',
  margin: '0 .5rem',
  cursor: 'pointer',
};

const Title = styled.div`
  font-size: 16pt;
`;
const Count = styled.div``;

const Todo = ({ todo, onClick }) => {
  const [isDeleting, setisDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  let currentJob;
  if ( localStorage.getItem('doing')  === String(todo.id) ) {
    currentJob = (
      <div style={ currentStyles }>
        <img src={ currentJob } width='10' height='10'/>
          This is current job
      </div>);
  } else {
    currentJob = (<div></div>);
  }

  return (
    <Wrapper onClick={onClick}>
      {currentJob}
      <Title> {todo.todo}</Title>
      <Count>{todo.count}번의 Pomo동안, {todo.count * 25}분 간 일했습니다.</Count>
      <Controls>
        <i
          className="fas fa-edit"
          style={editStyles}
          onClick={() => setIsEditing(true)}
        />
        <i
          className="fas fa-trash-alt"
          style={deleteStyles}
          onClick={() => setisDeleting(true)}
        />
        <DeleteTodo
          todo={todo}
          show={isDeleting}
          close={() => setisDeleting(false)}
        />
        <InputTodo
          editTodo={todo}
          opened={isEditing}
          close={() => setIsEditing(false)}
        />
      </Controls>
    </Wrapper>
  );
};

export default Todo;
