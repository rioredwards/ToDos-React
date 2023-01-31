import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { authUser } from '../../services/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();

  if (user) {
    return <Redirect to="/items" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Welcome to ToDos</h2>
      <Nav>
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </Nav>
      <div>
        <h3>{type}</h3>
        <div>
          <label htmlFor="emailInput">Email</label>
          <input
            type="email"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button onClick={submitAuth}>Submit</button>
    </div>
  );
}
