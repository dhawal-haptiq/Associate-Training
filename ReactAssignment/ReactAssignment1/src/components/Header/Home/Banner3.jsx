import React from 'react'
import bgImage from '../../../assets/Lamodeline.jpeg'
import { Link } from 'react-router-dom'

const Banner3 = () => {
  return (
    <div>
        <div className="aboutUs text-center text-9xl mt-10 mb-10 md:text-9xl sm:text-6xl">
            <h2>OUR STORE</h2>
        </div>
     <Link  to="/Aboutus">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bgImage})
        ` }}
      > 
      </div>
      </Link>
    </div>
  )
}

export default Banner3
