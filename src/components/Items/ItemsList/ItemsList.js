import React from 'react';
import { useItems } from '../../../context/ItemsContext.js';
import Item from './Item/Item';

const tempItems = [
  { id: 0, description: 'Write some code' },
  { id: 1, description: 'Take out the trash' },
  { id: 2, description: 'Eat some veggies' },
  { id: 3, description: 'Go on a walk' },
  { id: 4, description: 'Feed a duck' },
];

export default function ItemsList() {
  const { items } = useItems();
  console.log('items', items);

  return tempItems.map((item) => {
    return <Item key={item.id} description={item.description}></Item>;
  });
}
