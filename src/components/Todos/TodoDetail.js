import React from 'react';
import { useParams } from 'react-router-dom';

export default function TodoDetail() {
  const params = useParams();
  return (
    <>
      <div>TodoDetail</div>
      <div>id: {params.id}</div>
    </>
  );
}
