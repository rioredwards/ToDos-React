import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout.js';
import TodosRootLayout from './pages/TodosRootLayout.js';
import TodosPage from './pages/TodosPage.js';
import TodosDetailPage from './pages/TodosDetailPage.js';
import NewTodoPage from './pages/NewTodoPage.js';
import EditTodoPage from './pages/EditTodoPage.js';
import { loader as todosLoader } from './pages/TodosPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'todos',
        element: <TodosRootLayout />,
        children: [
          { index: true, element: <TodosPage />, loader: todosLoader },
          { path: ':id', element: <TodosDetailPage /> },
          { path: 'new', element: <NewTodoPage /> },
          { path: ':id/edit', element: <EditTodoPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
