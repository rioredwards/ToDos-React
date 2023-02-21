import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

export default function Search() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data) {
      console.log('data', data);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" action="/todos/search">
      <input placeholder="Search Todos..." aria-label="Search Todos..." name="searchString" />
      <button>Search</button>
    </fetcher.Form>
  );
}
