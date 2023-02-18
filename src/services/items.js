import { checkError, client } from './client.js';

export async function getTodos() {
  const resp = await client.from('todos').select().order('id', { ascending: false });

  return checkError(resp);
}

export async function createTodo(description) {
  const resp = await client.from('todos').insert([{ description }]).single();

  return checkError(resp);
}

export async function toggleTodo(id, complete) {
  const newValue = complete ? false : true;
  const resp = await client.from('todos').update({ complete: newValue }).eq('id', id).single();

  return checkError(resp);
}

export async function editTodo(id, newDescription) {
  const resp = await client
    .from('todos')
    .update({ description: newDescription })
    .eq('id', id)
    .single();

  return checkError(resp);
}

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete().eq('id', id);

  return checkError(resp);
}
