import React from 'react';

const Banner = () => {
  return (
    <div className="banner1">
      <div className="relative bg-[url('https://media.gucci.com/cms/2023/12/01/Gucci-Banner-Image.jpg')] bg-cover bg-center h-screen">
        <div className="absolute top-1/2 right-12 transform -translate-y-1/2 text-right text-white font-light tracking-widest ">
          <p className="tracking-widest mb-2 text-3xl">LUXURY</p>
          <h3 className="text-6xl">ELEGANT FASHION STORE</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
