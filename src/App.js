import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import { RouterProvider } from 'react-router';
import MainDashBoard from './Components/MainDashBoard';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: < MainDashBoard />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'oneHomeDashBoard',
    element: <HomePage />,
  },
  {
    path: 'matrixDashBoard',
    element: < HomePage />
  },
  {
    path: 'trestleDashBoard',
    element: < HomePage />
  },
  {
    path: 'phoenixDashBoard',
    element: < HomePage />
  },
  {
    path: 'ldcDashBoard',
    element: < HomePage />
  },
  {
    path: 'epwDashBoard',
    element: < HomePage />
  },
  {
    path: 'gomlsDashBoard',
    element: < HomePage />
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
  // Testing push from new Machine
}

export default App;
