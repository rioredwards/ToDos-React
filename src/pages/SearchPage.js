import { json } from 'react-router-dom';
import PageContent from '../components/PageContent/PageContent.js';
import Search from '../components/Todos/Search';
import { getFilteredTodos } from '../services/todos.js';

export default function SearchPage() {
  return (
    <PageContent title="Search for Todos!">
      <Search />
    </PageContent>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const searchString = data.get('searchString');

  // send to backend todos server ...
  try {
    const response = await getFilteredTodos(searchString);
    return response;
  } catch (error) {
    throw json(
      { message: 'Could not fetch todos.' },
      {
        status: 500,
      }
    );
  }
}
