import React from 'react';
import { NavLink } from 'react-router-dom';
import TodosList from '../components/Todos/TodosList';
import { getTodos } from '../services/todos.js';

export default function TodosPage() {
  return (
    <>
      <NavLink to="/todos/new">Add a todo</NavLink>
      <TodosList />
    </>
  );
}

export async function loader() {
  try {
    const response = await getTodos();
    return response;
  } catch (error) {
    console.error(error.message);
  }
}
