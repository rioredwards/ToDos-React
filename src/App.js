import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoDetail from './components/Todos/TodoDetail.js';
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout.js';
import TodosRootLayout from './pages/TodosRootLayout.js';
import TodosPage from './pages/TodosPage.js';

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
          { index: true, element: <TodosPage /> },
          { path: ':id', element: <TodoDetail /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
