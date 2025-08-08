import React from 'react'
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <div className="relative bg-[url('https://images.ctfassets.net/brzb6u29244a/5vzis31KSPoaH1TiDYct9h/4c1a2a4e7b4a734b972fcbb7068802a0/LandscapeXL_Gucci-LIDO-TIERII-MAY25-202503-CD-GUCCI-017-V2_001_Default_1.png?w=2000&fm=avif&q=50')] bg-cover bg-center h-screen">
      <div className="flex flex-col items-start justify-end h-full px-12 pb-12">
        <p className="text-white text-sm tracking-widest mb-2">FASHION</p>
        <Link to="/category/mens-shirts" className="text-white text-7xl font-light tracking-widest ">
          LATEST TRENDS
        </Link>
        <Link
          to="/category/mens-shirts"
          className="mt-5 border border-white text-white text-sm px-6 py-3 tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
        >
          SEE THE COLLECTION
        </Link>
      </div>
    </div>
  )
}

export default Banner2
