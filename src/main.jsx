import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routee from'../src/route/index.jsx';
import Navbar from'./page/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Routee/>
  
)
