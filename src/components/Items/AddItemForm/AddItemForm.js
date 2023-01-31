import React from 'react';

export default function AddItemForm() {
  return (
    <form>
      <input name="description" required placeholder="add a todo"></input>
      <button>Add</button>
    </form>
  );
}
