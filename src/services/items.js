import { checkError, client } from './client.js';

export async function getListItems() {
  const resp = await client.from('todos').select().order('id', { ascending: false });

  return checkError(resp);
}

export async function createListItem(description) {
  const resp = await client.from('todos').insert([{ description }]).single();

  return checkError(resp);
}

export async function toggleListItem(id, complete) {
  const newValue = complete ? false : true;
  const resp = await client.from('todos').update({ complete: newValue }).eq('id', id).single();

  return checkError(resp);
}

export async function deleteListItem(id) {
  const resp = await client.from('todos').delete().eq('id', id);

  return checkError(resp);
}
