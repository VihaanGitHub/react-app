import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from './pages/Home'
import About  from './pages/About'
import ProductsPage from './pages/ProductPage';
import ProductDetails from './pages/Product-details'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/products/:page",
    element:<ProductsPage/>
  },
  {
    path:"/product-details/:id",
    element:<ProductDetails/>
  },
  {
    path:"*",
    element:<>Hello 404</>,
  },
])
const root = document.getElementById('root');



ReactDOM.createRoot(root).render(
  <RouterProvider router={router}/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
