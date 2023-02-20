import React from 'react';
import { Outlet } from 'react-router-dom';
import { getTodoDetail, getTodos } from '../services/todos.js';

export default function TodosRoot() {
  return (
    <>
      <h1>Todos</h1>
      <Outlet />
    </>
  );
}

export async function loadTodos() {
  try {
    const response = await getTodos();
    return response;
  } catch (error) {
    console.error(error.message);
    return error;
  }
}

export async function loadTodo(id) {
  try {
    const response = await getTodoDetail(id);
    return response;
  } catch (error) {
    console.error(error.message);
    return error;
  }
}
