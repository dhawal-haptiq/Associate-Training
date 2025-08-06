import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaSearch,FaShoppingCart,FaUser, FaBars,FaTimes,FaHeart} from 'react-icons/fa';
import Product from '../../../pages/Product';
import Cart from '../../../pages/Cart';
import Login from '../../../pages/Login';
import Aboutus from './Aboutus';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md ">
    
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex items-center justify-between">
      
        <div className="text-xl font-bold">
          <Link to="/">LA MODE LINE</Link>
        </div>

        {/* Search bar */}
        <div className="relative hidden md:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full border py-2 px-4"
          />
          <FaSearch className="absolute top-3 right-3 text-blue-800" />
        </div>

      
        <div className="hidden md:flex items-center space-x-4">
          <Link to='/login' element={<Login/>}><button className="">Login</button></Link>
           <button>
            <Link to="/wishlist"><FaHeart className="text-xl" /></Link> 
          </button>
          <button>
            <Link to="/cart" element={<Cart/>}>
              <FaShoppingCart className="text-xl" /></Link>
            
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className='my-2 mx-5'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Menu - visible when menuOpen is true */}
      {menuOpen && (
        <div className="bg-gray-100 px-4 py-4 space-y-4 transition-all md:hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full border py-2 px-4 md:hidden lg:hidden"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500 md:hidden lg:hidden" />
          </div>

          <Link to="/" className="block px-2 py-1 rounded">
            Home
          </Link>
          <Link to="/cart" className="block px-2 py-1 rounded">
            Cart
          </Link>
          <Link
            to="/wishlist"
            className="block px-2 py-1 rounded"
            
          >
            Wishlist
          </Link>
          <Link
            to="/Aboutus"
            className="block px-2 py-1 rounded"
            element={<Aboutus/>}
          >
            About Us
          </Link>
          <div className="flex hidden items-center space-x-4 mt-4 md:hidden lg:hidden">
           
            <FaUser className="text-xl" />
            <button className="text-sm">Login | Register </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
