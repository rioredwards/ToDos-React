import { checkError, client } from './client.js';

export async function getListItems() {
  const resp = await client.from('todos').select();

  return checkError(resp);
}
export async function createListItems() {
  // TODO
}
export async function toggleListItem() {
  // TODO
}
