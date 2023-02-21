import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function TodoForm({ todo }) {
  const navigate = useNavigate();
  const [newDescription, setNewDescription] = useState(todo?.description || '');

  const handleAddTodo = () => {
    setNewDescription('');
    // Add todo
  };

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Container className="mb-4 d-flex flex-column align-items-center">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo(newDescription);
        }}
      >
        <Form.Group className="mb-3">
          <h2 className="text-center">Add Todo</h2>
          <InputGroup className="mb-3">
            <Button variant="primary" type="submit" className="d-inline">
              Add
            </Button>
            <Form.Control
              name="description"
              required
              placeholder="ex: ride a horse"
              defaultValue={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Button onClick={cancelHandler}>Cancel</Button>
      </Form>
    </Container>
  );
}
