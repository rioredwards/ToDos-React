import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todos from './components/Todos/Todos.js';
import ErrorPage from './pages/ErrorPage.js';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/todos', element: <Todos /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
