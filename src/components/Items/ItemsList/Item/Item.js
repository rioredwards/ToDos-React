import React, { useState } from 'react';
import {
  Col,
  Container,
  FormCheck,
  InputGroup,
  ListGroup,
  Row,
  ToggleButton,
} from 'react-bootstrap';
import { useItems } from '../../../../context/ItemsContext.js';
import { Image } from 'react-bootstrap';

export default function Item({ id, description, complete }) {
  const { handleCompleteToDo, handleDeleteToDo } = useItems();

  return (
    <ListGroup.Item className="w-100" action variant="success">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={6}>
            <p className="my-1">{`${description}`}</p>
          </Col>
          <Col xs={3} className="d-flex align-items-center justify-content-around gap-4">
            <Container className="d-flex align-items-center justify-content-end gap-4">
              <FormCheck
                className="form-control-lg my-0 px-0"
                onChange={() => handleCompleteToDo(id, complete)}
                checked={complete}
              />
              <Image height={24} src="pencil.png" alt="edit" />
              <Image
                height={24}
                src="trash-can.png"
                onClick={() => handleDeleteToDo(id)}
                alt="delete"
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}
