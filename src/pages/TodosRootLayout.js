import React from 'react';
import { Outlet } from 'react-router-dom';

export default function TodosRootLayout() {
  return (
    <>
      <h1>Todos</h1>
      <Outlet />
    </>
  );
}
