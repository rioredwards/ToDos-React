import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="assets/todo-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ToDo's Logo"
          />
          {'  '}
          Todos
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
