import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { todoActions } from '../../../store/todo-slice.js';

export default function AddTodoForm() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    dispatch(
      todoActions.addTodo({
        id: Math.random(),
        description,
        complete: false,
      })
    );
    setDescription('');
  };

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
      </Form>
    </Container>
  );
}
