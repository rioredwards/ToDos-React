import React from 'react';
import { useParams } from 'react-router-dom';

export default function TodoDetail() {
  const params = useParams();
  return (
    <>
      <h3>TodoDetail</h3>
      <div>id: {params.id}</div>
    </>
  );
}
