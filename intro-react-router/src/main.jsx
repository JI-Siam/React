import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Users from './Users/Users.jsx';
import User from './User/User.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component : Root , 
    children : [
      {index:true, Component: Home} , 
      {path:"dashboard", element: <Dashboard></Dashboard>} , 
      {path : "users" , 
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'), 
        Component : Users
      }, 
      {
        path:"users/:id" , 
        loader :  ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`), 
        Component : UserDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
