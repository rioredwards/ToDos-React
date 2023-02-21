import React from 'react';
import { Alert, Col, Container, ListGroup, Row } from 'react-bootstrap';
import Todo from './Todo';

export default function TodosList({ todos }) {
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
                return <Todo key={todo.id} todo={todo}></Todo>;
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
