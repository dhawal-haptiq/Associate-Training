import React from 'react';
import { Link } from 'react-router-dom';

const Banner4 = () => {
  return (
    <div className='mt-10 text-black'>
      <div className="relative bg-[url('https://www.chanel.com/puls-img/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1742562117322-homepagecorpoonedesktopjpg_3240x5760.jpg')] bg-cover bg-center h-screen flex items-end justify-end">
        <div className="flex flex-col items-end px-12 pb-12 text-right text-black font-light tracking-widest ">
          <p className=" tracking-widest mb-2">FASHION</p>
          <h3 className='text-5xl'>THE WOMEN BAGS</h3>
          <Link
            to="/category/womens-bags"
            className="mt-5 border border-black text-black text-sm px-6 py-3 tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
          >
            SEE THE COLLECTION
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Banner4;
