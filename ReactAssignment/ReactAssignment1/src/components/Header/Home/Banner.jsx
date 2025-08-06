import React from 'react';
import { Link } from 'react-router-dom'; 
import Product from '../../../pages/Product';

const Banner = () => {
  return (
    <div className="banner1">
      <div className="relative bg-[url('https://media.gucci.com/...')] bg-cover bg-center h-screen">
        {/* Content */}
        {/* <Link
          to="/product"
          className="absolute top-1/2 right-10 -translate-y-1/2 text-white px-8 py-3 mx-30 bg-opacity-60 rounded-md hover:bg-opacity-80 transition text-8xl"
        >
          Shop Now
          
        </Link> */}
        
        <div className="flex flex-col items-end px-12 pb-12 text-right text-white font-light tracking-widest ">
                  <p className=" tracking-widest mb-2">FASHION</p>
                  <h3 className='text-5xl'>THE WOMEN BAGS</h3>
                  <Link
                    to="/womenbags"
                    className="mt-5 border border-white text-white text-sm px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    SEE THE COLLECTION
                  </Link>
         </div>
      </div>
    </div>
  );
};

export default Banner;
