import React, { useEffect } from 'react';
import { Alert, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodosAction } from '../../../store/todo-actions.js';
import Todo from './Todo/Todo';

export default function TodosList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(getAllTodosAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} xl={10} className="d-flex flex-column">
          <ListGroup>
            {!todos.length && (
              <Alert variant="warning">
                👋 Looks like your list is empty!
                <br /> Use the form above to add a new ToDo!
              </Alert>
            )}
            {!!todos.length &&
              todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    description={todo.description}
                    complete={todo.complete}
                  ></Todo>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
