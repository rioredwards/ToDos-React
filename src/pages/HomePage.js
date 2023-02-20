import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/todos');
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        Go to: <NavLink to="/todos">Todos</NavLink>
      </p>
      <button onClick={navigateHandler}>Go to todos with button 😎</button>
    </>
  );
}
