import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout.js';
import TodosRoot, { deleteAction } from './pages/TodosRoot.js';
import TodosListPage from './pages/TodosListPage.js';
import TodosDetailPage from './pages/TodosDetailPage.js';
import NewTodoPage from './pages/NewTodoPage.js';
import EditTodoPage from './pages/EditTodoPage.js';
import { loader as todosLoader } from './pages/TodosListPage';
import { loader as todosDetailLoader } from './pages/TodosDetailPage';
import { action as addOrEditTodosAction } from './components/Todos/TodoForm';
import SearchPage, { action as searchAction } from './pages/SearchPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'todos',
        element: <TodosRoot />,
        children: [
          { index: true, element: <TodosListPage />, loader: todosLoader },
          { path: 'new', element: <NewTodoPage />, action: addOrEditTodosAction },
          {
            path: ':id',
            loader: todosDetailLoader,
            action: deleteAction,
            id: 'todos-detail',
            children: [
              {
                index: true,
                element: <TodosDetailPage />,
              },
              { path: 'edit', element: <EditTodoPage />, action: addOrEditTodosAction },
            ],
          },
          { path: 'search', element: <SearchPage />, action: searchAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
