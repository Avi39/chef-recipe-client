/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import RecipiesLayout from '../layouts/RecipiesLayout';
import Reciepes from '../pages/Recieps/Reciepes';

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
    {
        path:'/',
        element:<RecipiesLayout></RecipiesLayout>,
        children:[
            {
                path:'/recipes/:id',
                element:<Reciepes></Reciepes>,
                loader:({params}) =>fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
  ]);



export default router;