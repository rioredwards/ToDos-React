import React from 'react';
import AddTodoForm from '../components/Todos/AddTodoForm.js';
import TodosList from '../components/Todos/TodosList';

export default function TodosPage() {
  return (
    <>
      <AddTodoForm />
      <TodosList />
    </>
  );
}
