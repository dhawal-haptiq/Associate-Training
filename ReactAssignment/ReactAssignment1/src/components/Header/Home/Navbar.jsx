import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/auth.Slice';  
import { search } from '../../../features/Search.Slice';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [filtered, setFiltered] = useState();
  const dispatch = useDispatch();
  const searchItem= useSelector((state)=>state.search.searchItem);
  
  const user = useSelector((state) => state.auth.user);
  
  const handleLogout = () => {
    dispatch(logout());
  };
  
  // const handletheSearchChange = (e) => {
  //   const input=e.target.value;
  //   setFiltered(input);
  //   const filtered=data?.title.filter(item=>item.toLowerCase().includes(input.toLowerCase()))

  // }

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
            value={searchItem}
            onChange={(e)=>dispatch(search(e.target.value))}
          />
          <FaSearch className="absolute top-3 right-3 text-blue-800" />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* login */}
          {!user ? (
            <Link to="/login">
              <button>Login</button>
            </Link>
          ) : (
            <>
              
              <span className="text-gray-700"> {user.email}</span>
              <button onClick={handleLogout} className="text-red-600 hover:underline">
                Logout
              </button>
            </>
          )}

          <button>
            <Link to="/wishlist">
              <FaHeart className="text-xl" />
            </Link>
          </button>
          <button>
            <Link to="/cart">
              <FaShoppingCart className="text-xl" />
            </Link>
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="my-2 mx-5">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/*  Menu  */}
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

         
          <Link to="/catrgory/mens-shirts" className="block px-2 py-1 rounded">
            MENS
          </Link>
          <Link to="/category/womens-dresses" className="block px-2 py-1 rounded">
            WOMENS
          </Link>
           <Link to="/womenbags" className="block px-2 py-1 rounded">
            BAGS
          </Link>
          <Link to="/Aboutus" className="block px-2 py-1 rounded">
            ABOUT US
          </Link>

          {/* Mobile Login / Logout */}
          <div className="flex items-center space-x-4 mt-4 md:hidden lg:hidden">
            <FaUser className="text-xl" />
            {!user ? (
              <Link to="/login" className="text-sm">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="text-sm text-red-600 hover:underline">
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
