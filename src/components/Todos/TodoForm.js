import React from 'react';
import { useState } from 'react';
import { Button, Container, Form as BSForm, InputGroup } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function TodoForm({ todo }) {
  const navigate = useNavigate();
  const [newDescription, setNewDescription] = useState(todo?.description || '');

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Container className="mb-4 d-flex flex-column align-items-center">
      {/* Note: add an "action" attribute to Form to specify route */}
      <BSForm as={Form} method="post">
        <BSForm.Group className="mb-3">
          <h2 className="text-center">Add Todo</h2>
          <InputGroup className="mb-3">
            <Button variant="primary" type="submit" className="d-inline">
              Add
            </Button>
            <BSForm.Control
              name="description"
              required
              placeholder="ex: ride a horse"
              defaultValue={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </InputGroup>
        </BSForm.Group>
        <Button onClick={cancelHandler}>Cancel</Button>
      </BSForm>
    </Container>
  );
}
