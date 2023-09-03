/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import RecipiesLayout from '../layouts/RecipiesLayout';
import Reciepes from '../pages/Recieps/Reciepes';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import LoginLayout from '../layouts/LoginLayout';
import PrivateRoute from './PrivateRoute';
import Blog from '../pages/Blog/Blog';
import Error from '../Error/Error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
        
      ]
    },
    {
        path:'/',
        element:<RecipiesLayout></RecipiesLayout>,
        children:[
            {
                path:'/recipes/:id',
                element:<PrivateRoute><Reciepes></Reciepes></PrivateRoute>,
                loader:({params}) =>fetch(`https://assignment-ten-server-avi39.vercel.app/chefs/${params.id}`)
            } 
        ]
    },
    {
      path:'/',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:'/',
          element:<Main></Main>
        },  
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ]);



export default router;