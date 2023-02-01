import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Item({ description }) {
  return (
    <ListGroup.Item action variant="success">
      {description}
    </ListGroup.Item>
  );
}
