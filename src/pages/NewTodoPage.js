import React from 'react';
import { json, redirect } from 'react-router-dom';
import TodoForm from '../components/Todos/TodoForm.js';
import { createTodo } from '../services/todos.js';

export default function NewTodoPage() {
  return (
    <>
      <div>New Todo Page</div>
      <TodoForm />
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const description = data.get('description');

  try {
    await createTodo(description);
  } catch (error) {
    console.error(error.message);
    throw json({ message: 'Could not save event.' }, { status: 500 });
  }

  return redirect('/todos');
}
