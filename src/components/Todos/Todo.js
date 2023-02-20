import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormCheck, ListGroup, Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTodoAction, updateTodoAction } from '../../store/todo-actions.js';
import { todoActions } from '../../store/todo-slice';
// import { sendUpdatedTodo } from '../../../store/todo-actions';

let isInitial = true;

export default function Todo({ id, description, complete }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  // update remote todo when local todo changes
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(
      updateTodoAction({
        id,
        description,
        complete,
      })
    );
  }, [id, description, complete, dispatch]);

  function handleSubmitToDoEdits(e) {
    e.preventDefault();
    setEditing(false);
    dispatch(
      todoActions.updateTodo({
        id,
        description: newDescription,
        complete,
      })
    );
  }

  const handleCompleteToDo = () => {
    dispatch(
      todoActions.updateTodo({
        id,
        description,
        complete: !complete,
      })
    );
  };

  const handleDeleteToDo = () => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <ListGroup.Item as={'li'} className="w-100 lead" action variant="info">
      {!editing && (
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs={6}>
              <p className="my-1">{`${description}`}</p>
            </Col>
            <Col xs={3} className="d-flex align-items-center justify-content-around gap-4">
              <Container className="d-flex align-items-center justify-content-end gap-4">
                <FormCheck
                  className="form-control-lg my-0 px-0"
                  onChange={() => handleCompleteToDo()}
                  checked={complete}
                />
                <Image height={24} src="pencil.png" alt="edit" onClick={() => setEditing(true)} />
                <Image
                  height={24}
                  src="trash-can.png"
                  onClick={() => handleDeleteToDo()}
                  alt="delete"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      )}
      {editing && (
        <Form className="p-1" onSubmit={handleSubmitToDoEdits}>
          <Row className="align-items-center justify-content-between">
            <Col xs={8}>
              <Form.Control
                type="text"
                name="new description"
                required
                placeholder="ex: eat a bagel"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      )}
    </ListGroup.Item>
  );
}
