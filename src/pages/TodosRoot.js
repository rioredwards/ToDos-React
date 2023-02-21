import React from 'react';
import { json, Outlet, redirect } from 'react-router-dom';
import { deleteTodo, getTodoDetail, getTodos } from '../services/todos.js';

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
    throw json(
      { message: 'Could not fetch todos.' },
      {
        status: 500,
      }
    );
  }
}

export async function loadTodo(id) {
  try {
    const response = await getTodoDetail(id);
    return response;
  } catch (error) {
    console.error(error.message);
    throw json(
      { message: 'Could not fetch todo.' },
      {
        status: 500,
      }
    );
  }
}

export async function deleteAction({ params, request }) {
  const id = parseInt(params.id);
  if (request.method !== 'DELETE') return;
  try {
    await deleteTodo(id);
  } catch (error) {
    console.error(error.message);
    throw json(
      { message: 'Could not delete todo.' },
      {
        status: 500,
      }
    );
  }

  return redirect('/todos');
}
