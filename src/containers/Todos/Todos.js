import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { firestoreConnect } from 'react-redux-firebase';
import Heading from '../../components/UI/Headings/Heading';
import { Container } from '../../hoc/layout/elements';
import InputTodo from './InputTodo/InputTodo';
import Button from '../../components/UI/Forms/Button/Button';
import Loader from '../../components/UI/Loader/Loader';
import Todo from './Todo/Todo';
import Timer from '../../components/Timer';
import * as actions from '../../store/actions';
import App1 from '../../components/WhiteNoise/App1';

const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const Content = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  flex-direction: column;
  margin-top: 2rem;
`;


const Todos = ({ todos, requested, userId }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [currentJob, setCurrentJob] = useState(localStorage.getItem('doing'));

  const saveCurrentJob = (id) => {
    localStorage.setItem('doing', id);
    setCurrentJob(id);
  }

  let content;
  if (!todos) {
    content = (
      <Content>
        <Loader isWhite />
      </Content>
    );
  } else if (
    (!todos[userId] && requested[`todos/${userId}`]) ||
    todos[userId].todos.length === 0
  ) {
    content = (
      <Content>
        <Heading color="white" size="h2">
          You have no todos!
        </Heading>
      </Content>
    );
  } else {
    content = (
      <Content>
        {todos[userId].todos
          .slice(0)
          .reverse()
          .map(todo => (
            <Todo key={todo.id} id={todo.id} todo={todo} onClick={() => saveCurrentJob(todo.id)} />
          ))}
      </Content>
    );
  }

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Timer currentJob={currentJob} />
          <Heading noMargin size="h1" color="white">
            Your Todos
          </Heading>
          <Button color="main" contain onClick={() => setIsAdding(true)}>
            Add Todo
          </Button>
          <InputTodo opened={isAdding} close={() => setIsAdding(false)} />
          {content}
          <App1 />
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  todos: firestore.data.todos,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested,
});

const mapDispatchToProps = {
  addCountAction: actions.addCount,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [`todos/${props.userId}`])
)(Todos);
