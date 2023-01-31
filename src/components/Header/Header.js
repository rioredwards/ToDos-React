import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

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
        {user && (
          <Nav className="mr-auto">
            <Navbar.Text>hello {user.email}</Navbar.Text>
            <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
