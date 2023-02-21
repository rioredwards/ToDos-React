import logo from './todo-logo.png';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Search from '../Todos/Search.js';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ToDo Logo"
          />
          {'  '}
          ToDos
        </Navbar.Brand>
        <Search />
        <Nav className="mr-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/todos" as={NavLink}>
            Todos
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
