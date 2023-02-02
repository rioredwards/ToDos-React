import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useItems } from '../../../context/ItemsContext.js';
import Item from './Item/Item';

export default function ItemsList() {
  const { items } = useItems();
  console.log('items', items);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} xl={10} className="d-flex flex-column">
          <ListGroup>
            {!items.length && (
              <>
                <p>Looks like your todo list is empty!</p>
                <p>Use the form above to add a ToDo!</p>
              </>
            )}
            {!!items.length &&
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
        </Col>
      </Row>
    </Container>
  );
}
