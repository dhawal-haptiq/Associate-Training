import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from '../pages/Cart';
import AppLayout from '../Layouts/AppLayout';
import Aboutus from '../components/Header/Home/Aboutus';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Wishlist from '../pages/Wishlist';
import ProductView from '../pages/ProductView';
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/Aboutus",
          element: <Aboutus />
        },
        {
          path: "/Login",
          element: <Login />
        },
        {
          path: "/wishlist",
          element: <Wishlist />
        },
        {
          path: "/productview",
          element: <ProductView />
        },
        {
          path: "/product/:id",
          element: <ProductDetails />
        },
        {
          path: "/category/:categoryName",
          element: <Products />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routers