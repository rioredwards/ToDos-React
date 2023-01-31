import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

const tempItems = [
  { id: 0, description: 'Write some code' },
  { id: 1, description: 'Take out the trash' },
  { id: 2, description: 'Eat some veggies' },
  { id: 3, description: 'Go on a walk' },
  { id: 4, description: 'Feed a duck' },
];

export default function Items() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return tempItems.map((item) => {
    return <div key={item.id}>{item.description}</div>;
  });
}
