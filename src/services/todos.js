import { checkError, client } from './client.js';

export async function getTodos() {
  const resp = await client.from('todos').select().order('id', { ascending: false });

  return checkError(resp);
}

export async function getTodoDetail(id) {
  const resp = await client.from('todos').select().match({ id }).single();

  return checkError(resp);
}

export async function createTodo(description) {
  const resp = await client.from('todos').insert(description).single();
  const filteredResponse = {
    data: resp.body,
    error: resp.error,
    status: resp.status,
  };
  console.log('filteredResponse', filteredResponse);

  return filteredResponse;
}

export async function updateTodo({ id, description, complete }) {
  const resp = await client.from('todos').update({ description, complete }).eq('id', id).single();

  return checkError(resp);
}

export async function deleteTodo(id) {
  const resp = await client.from('todos').delete().eq('id', id);

  return checkError(resp);
}
