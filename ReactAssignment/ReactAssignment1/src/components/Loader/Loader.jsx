
import React from 'react';

const Loader = () => {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 gap-5">
      <div className="heading text-3xl"><h1>LA MODE LINE</h1></div>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black-500"></div>
    </div>
    </>
  );
};

export default Loader;
