import React from 'react';
import { Col, Container, FormCheck, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Todo({ todo }) {
  const { id, description, complete } = todo;
  const navigate = useNavigate();

  function handleToggleToDo() {
    // Complete todo
  }

  function handleEditTodo() {
    navigate(`/todos/${id}/edit`);
  }

  return (
    <ListGroup.Item as={'li'} className="w-100 lead" action variant="info">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={10}>
            <Link to={`/todos/${id}`}>
              <p className="my-1">{`${description}`}</p>
            </Link>
          </Col>
          <Col xs={3} className="d-flex align-items-center justify-content-around gap-4">
            <Container className="d-flex align-items-center justify-content-end gap-4">
              <FormCheck
                className="form-control-lg my-0 px-0"
                onChange={handleToggleToDo}
                checked={complete}
              />
              <Image height={24} src="pencil.png" alt="edit" onClick={handleEditTodo} />
            </Container>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}
