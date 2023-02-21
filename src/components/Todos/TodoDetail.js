import React from 'react';
import { useParams } from 'react-router-dom';
import Todo from './Todo.js';

export default function TodoDetail({ todo }) {
  const params = useParams();
  return (
    <>
      <h3>TodoDetail</h3>
      <p>Todo # {params.id}</p>
      <Todo todo={todo} />
    </>
  );
}
