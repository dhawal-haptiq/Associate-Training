import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import AppLayout from '../Layouts/AppLayout';
import Aboutus from '../components/Header/Home/Aboutus';
import Home from '../pages/Home';
import Product from '../pages/Products';
import Login from '../pages/Login';
import Wishlist from '../pages/Wislist';
import WomenClothes from '../pages/WomenClothes';
import WomenBags from '../pages/WomenBags';
import ProductView from '../pages/ProductView';
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
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
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"/womenclothes",
        element:<WomenClothes/>
      },
      {
        path:"/womenbags",
        element:<WomenBags/>
      },
      {
        path:"/productview",
        element:<ProductView/>
      },
      {
        path:"/product/:id", 
        element:<ProductDetails/>
      },
      {
        path:"/category/:categoryName",
        element:<Products/>
      }
    ]
  }
 ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routers