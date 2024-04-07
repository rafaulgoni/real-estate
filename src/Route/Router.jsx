import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home'
import LogIn from '../Auth/LogIn/LogIn'
import Register from '../Auth/Register/Register'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path: '/login',
          element: <LogIn></LogIn>,
        },
        {
          path:'/register',
          element: <Register></Register>,
        }
      ]
    },
  ]);