import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import AddItemForm from './AddItemForm/AddItemForm.js';
import ItemsList from './ItemsList/ItemsList.js';

export default function Items() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <>
      <AddItemForm />
      <ItemsList />
    </>
  );
}
