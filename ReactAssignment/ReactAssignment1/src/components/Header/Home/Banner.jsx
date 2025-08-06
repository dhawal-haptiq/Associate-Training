import React from 'react';
import { Link } from 'react-router-dom'; 
import Product from '../../../pages/Product';

const Banner = () => {
  return (
    <div className="banner1">
      <div className="relative bg-[url('https://media.gucci.com/...')] bg-cover bg-center h-screen">
        {/* Content */}
        <Link
          to="/product"
          className="absolute top-1/2 right-10 -translate-y-1/2 text-white text-4xl px-8 py-3 mx-30 bg-opacity-60 rounded-md hover:bg-opacity-80 transition text-8xl"
        >
          Shop Now
          
        </Link>
        
      </div>
    </div>
  );
};

export default Banner;
