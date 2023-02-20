import React, { useState } from 'react';
import { Button, Col, Container, Form, FormCheck, ListGroup, Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Todo({ id, description, complete }) {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  function handleSubmitToDoEdits(e) {
    e.preventDefault();
    setEditing(false);
    // Edit todo
  }

  const handleCompleteToDo = () => {
    // Complete todo
  };

  const handleDeleteToDo = () => {
    // Delete todo
  };

  return (
    <ListGroup.Item as={'li'} className="w-100 lead" action variant="info">
      {!editing && (
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs={6}>
              <NavLink to={`/todos/${id}`}>
                <p className="my-1">{`${description}`}</p>
              </NavLink>
            </Col>
            <Col xs={3} className="d-flex align-items-center justify-content-around gap-4">
              <Container className="d-flex align-items-center justify-content-end gap-4">
                <FormCheck
                  className="form-control-lg my-0 px-0"
                  onChange={() => handleCompleteToDo()}
                  checked={complete}
                />
                <Image height={24} src="pencil.png" alt="edit" onClick={() => setEditing(true)} />
                <Image
                  height={24}
                  src="trash-can.png"
                  onClick={() => handleDeleteToDo()}
                  alt="delete"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      )}
      {editing && (
        <Form className="p-1" onSubmit={handleSubmitToDoEdits}>
          <Row className="align-items-center justify-content-between">
            <Col xs={8}>
              <Form.Control
                type="text"
                name="new description"
                required
                placeholder="ex: eat a bagel"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      )}
    </ListGroup.Item>
  );
}
