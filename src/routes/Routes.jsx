/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);



export default router;