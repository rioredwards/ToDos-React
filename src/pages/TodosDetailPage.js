import React, { Suspense } from 'react';
import { Await, defer, useRouteLoaderData } from 'react-router-dom';
import TodoDetail from '../components/Todos/TodoDetail.js';
import TodosList from '../components/Todos/TodosList.js';
import { loadTodo, loadTodos } from './TodosRoot.js';

export default function TodosDetailPage() {
  const { todo, todos } = useRouteLoaderData('todos-detail');

  return (
    <>
      <h2>TodosDetailPage</h2>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={todo}>{(loadedTodo) => <TodoDetail todo={loadedTodo} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={todos}>{(loadedTodos) => <TodosList todos={loadedTodos} />}</Await>
      </Suspense>
    </>
  );
}

export async function loader({ params }) {
  const id = params.id;

  return defer({
    todo: await loadTodo(id),
    todos: loadTodos(),
  });
}
