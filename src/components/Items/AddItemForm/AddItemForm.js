import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useItems } from '../../../context/ItemsContext.js';
import { createListItem } from '../../../services/items.js';

export default function AddItemForm() {
  const [description, setDescription] = useState('');
  const { setItems } = useItems();

  const handleAddTodo = async () => {
    try {
      const item = await createListItem(description);
      setItems((prev) => [item, ...prev]);
      setDescription('');
    } catch (e) {
      console.error(e);
    }
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
            <Button variant="outline-primary" type="submit" className="d-inline">
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
