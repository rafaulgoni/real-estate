import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home'
import LogIn from '../Auth/LogIn/LogIn'
import Register from '../Auth/Register/Register'
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import DetailsCard from "../Pages/detailsCard/DetailsCard";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Review from "../Pages/Review/Review";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=> fetch('/FakeData.json'),
        },
        {
          path:'/details/:id',
          element: <PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>,
          loader: ()=> fetch('/FakeData.json'),
        },
        {
          path:'/profile',
          element: <Profile></Profile>,
        },
        {
          path: '/login',
          element: <LogIn></LogIn>,
        },
        {
          path:'/register',
          element: <Register></Register>,
        },
        {
          path:'/contact',
          element: <Contact></Contact>,
        },
        {
          path:'/review',
          element: <Review></Review>,
        }
      ]
    },
  ]);