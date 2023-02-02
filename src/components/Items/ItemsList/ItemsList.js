import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useItems } from '../../../context/ItemsContext.js';
import Item from './Item/Item';

export default function ItemsList() {
  const { items } = useItems();

  return (
    <Container className="d-flex flex-column align-items-center">
      <ListGroup>
        {!items && <p>👋 Looks like your todo list is empty! Use the form above to add a ToDo!</p>}
        {items &&
          items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                description={item.description}
                complete={item.complete}
              ></Item>
            );
          })}
      </ListGroup>
    </Container>
  );
}
