import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter();

export default function App () {
  return (
    <RouterProvider router={ router } />
  );
}

