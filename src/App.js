import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import { RouterProvider } from 'react-router';
import MainDashBoard from './Components/MainDashBoard';

const routeDefinations = createRoutesFromElements(
  <Route>
    <Route path='/' element={<MainDashBoard />}></Route>
    <Route path='/oneHomeDashBoard' element={<HomePage />}></Route>
    <Route path='/matrixDashBoard' element={<HomePage />}></Route>
    <Route path='/trestleDashBoard' element={<HomePage />}></Route>
    <Route path='/phoenixDashBoard' element={<HomePage />}></Route>
    <Route path='/ldcDashBoard' element={<HomePage />}></Route>
    <Route path='/epwDashBoard' element={<HomePage />}></Route>
    <Route path='/gomlsDashBoard' element={<HomePage />}></Route>
  </Route>
);

const router = createBrowserRouter(routeDefinations);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
