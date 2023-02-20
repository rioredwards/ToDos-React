import React from 'react';
import AddTodoForm from './AddTodoForm.js';
import TodosList from './TodosList';

export default function Todos() {
  return (
    <>
      <AddTodoForm />
      <TodosList />
    </>
  );
}
