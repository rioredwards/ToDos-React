import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useItems } from '../../../context/ItemsContext.js';
import Item from './Item/Item';

export default function ItemsList() {
  const { items } = useItems();

  return (
    <Container className="d-flex flex-column align-items-center">
      <ListGroup>
        {items.map((item) => {
          return <Item key={item.id} description={item.description}></Item>;
        })}
      </ListGroup>
    </Container>
  );
}
