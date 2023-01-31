import { checkError, client } from './client.js';

export async function getListItems() {
  const resp = await client.from('todos').select().order('id', { ascending: false });

  return checkError(resp);
}
export async function createListItem(description) {
  const resp = await client.from('todos').insert([{ description }]).single();

  return checkError(resp);
}
export async function toggleListItem() {
  // TODO
}
