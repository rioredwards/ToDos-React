import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTodoAction } from '../../store/todo-actions.js';

export default function AddTodoForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    dispatch(createTodoAction(description));
    setDescription('');
  };

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Container className="mb-4 d-flex flex-column align-items-center">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo(description);
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Button onClick={cancelHandler}>Cancel</Button>
      </Form>
    </Container>
  );
}
