import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import TodosList from '../components/Todos/TodosList';
import { loadTodos } from './TodosRoot.js';

export default function TodosListPage() {
  const todos = useLoaderData();

  return (
    <>
      <NavLink to="/todos/new">Add a todo</NavLink>
      <TodosList todos={todos} />
    </>
  );
}

export async function loader() {
  return await loadTodos();
}
