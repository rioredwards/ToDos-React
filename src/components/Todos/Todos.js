import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import AddTodoForm from './AddTodoForm/AddTodoForm.js';
import TodosList from './TodosList/TodosList';

export default function Todos() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <>
      <AddTodoForm />
      <TodosList />
    </>
  );
}
