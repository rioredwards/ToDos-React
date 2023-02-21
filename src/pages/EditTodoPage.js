import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import TodoForm from '../components/Todos/TodoForm.js';

export default function EditTodoPage() {
  const { todo } = useRouteLoaderData('todos-detail');

  return (
    <>
      <div>Edit Todo Page</div>
      <TodoForm todo={todo} />
    </>
  );
}
