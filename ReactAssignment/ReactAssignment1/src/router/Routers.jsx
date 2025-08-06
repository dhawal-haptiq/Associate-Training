import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import AppLayout from '../Layouts/AppLayout';
import Aboutus from '../components/Header/Home/Aboutus';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Login from '../pages/Login';
import Wishlist from '../pages/Whislist';
import Clothes from '../pages/Clothes';
import WomenClothes from '../pages/WomenClothes';
import WomenBags from '../pages/WomenBags';
const Routers = () => {
    const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        index:true ,
       element:<Home/> 
      },
      {
        path:"/product",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/Aboutus",
        element:<Aboutus/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"/clothes",
        element:<Clothes/>
      },
      {
        path:"/womenclothes",
        element:<WomenClothes/>
      },
      {
        path:"/womenbags",
        element:<WomenBags/>
      }
    ]
  }
 ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routers