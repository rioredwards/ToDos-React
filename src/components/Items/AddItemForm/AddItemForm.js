import React from 'react';
import { useState } from 'react';
import { useItems } from '../../../context/ItemsContext.js';
import { createListItem } from '../../../services/items.js';

export default function AddItemForm() {
  const [description, setDescription] = useState('');
  const { setItems } = useItems();

  const handleAddTodo = async () => {
    try {
      const item = await createListItem(description);
      setItems((prev) => [item, ...prev]);
      setDescription('');
    } catch (e) {
      console.error(e);
    }
    console.log(description);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(description);
      }}
    >
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        required
        placeholder="add a todo"
      />
      <button>Add</button>
    </form>
  );
}
