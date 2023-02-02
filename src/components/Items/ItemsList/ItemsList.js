import React from 'react';
import { Alert, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useItems } from '../../../context/ItemsContext.js';
import Item from './Item/Item';

export default function ItemsList() {
  const { items } = useItems();

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} xl={10} className="d-flex flex-column">
          <ListGroup>
            {!items.length && (
              <Alert variant="warning">
                👋 Looks like your list is empty!
                <br /> Use the form above to add a new ToDo!
              </Alert>
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
