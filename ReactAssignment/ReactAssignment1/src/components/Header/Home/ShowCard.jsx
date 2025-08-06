import React from 'react'
import { Link } from 'react-router-dom';
const ShowCard = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        
        {/* Card 1 */}
      <div
  className="w-full md:w-1/2 h-300 lg:h-300 bg-cover bg-center shadow-md border p-4 overflow-hidden"
  style={{
    backgroundImage:
      "url('https://static.zara.net/assets/public/aa91/963a/534a49e4823f/e55a71d85c96/T9638894376-p/T9638894376-p.jpg?ts=1753777568235&w=750')",
  }}
>
<div className="flex flex-col items-center mt-[40vh]">
          <p className="text-white text-sm tracking-widest mb-2">FASHION</p>
          <Link to="" className='text-white text-5xl font-light text-center tracking-widest'>THE MEN  COLLECTION</Link>
          <Link to="/category/mens-shirts" className="mt-5 border border-white text-white text-sm px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            SEE THE COLLECTION
          </Link>
        </div>
</div>


        {/* Card 2 */}
        <div className="w-full md:w-1/2 h-300 lg:h-300 bg-cover bg-center shadow-md border p-4"
          style={{ backgroundImage: "url('https://www.ralphlauren.global/on/demandware.static/-/Library-Sites-RalphLauren_EU_Library/default/dw04050b5e/img/202508/08052025-eu-hp/0805_hp_c03a_img.jpg')" }}>
          
          <div className="flex flex-col items-center mt-[40vh]">
                    <p className="text-white text-sm tracking-widest mb-2">FASHION</p>
                    <Link to="" className='text-white text-5xl font-light text-center tracking-widest'>THE WOMEN COLLECTION</Link>
                    <Link to="/category/womens-dresses" className="mt-5 border border-white text-white text-sm px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                      SEE THE COLLECTION
                    </Link>
                  </div>
         
        </div>

      </div>
    </div>
  );
};

export default ShowCard;
