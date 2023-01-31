import React from 'react';
import { useItems } from '../../../context/ItemsContext.js';
import Item from './Item/Item';

export default function ItemsList() {
  const { items } = useItems();

  return items.map((item) => {
    return <Item key={item.id} description={item.description}></Item>;
  });
}
