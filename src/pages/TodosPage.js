import React from 'react';
import { NavLink } from 'react-router-dom';
import TodosList from '../components/Todos/TodosList';

export default function TodosPage() {
  return (
    <>
      <NavLink to="/todos/new">Add a todo</NavLink>
      <TodosList />
    </>
  );
}
