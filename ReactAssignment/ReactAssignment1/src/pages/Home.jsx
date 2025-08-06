import React from 'react'
import Banner from '../components/Header/Home/Banner'
import Banner2 from '../components/Header/Home/Banner2'
import Banner3 from '../components/Header/Home/Banner3'
import Banner4 from '../components/Header/Home/Banner4'
import ShowCard from '../components/Header/Home/ShowCard'

const Home = () => {
  return (
    <div className="">
      {/* Banner Section with Background */}
      <div
        className="bg-[url('https://media.gucci.com/dynamic/b3c8/0G+FNv+VrJjErdr_Ylw0OjTz7BcwrOrG8EZnbtBD04J_a4Lq_8kZcyGyUozb_VkpewLCg2aaGB8Jl8_2jghLMYXQfJuOpXjykjPApRr_Ji+YFeXIoIH3gFdwYAR4ibRPcPH7Jig922LahOvW1qADoLn+AfoFH2_buMmPJc4PL79a+n9Axihl0dmM8pLhiUhrDOKopOinfk_6TcdCOUQh1r47CmzamAoZTmlseCMPd9SeKM8fWablY9NivVlUYN4XYKA4z8MrpItmpKeq5JwYG1tFu07uclUSWPqmn0P62wXO3r0uZYq+X7txEwHnATK49WTdWUWAEUyIsDyBRfrdkLXk0B7N_aUxYQYHmn1snZPz3cXNPRZX1AL3jY1sgKUjVYISizpVrINU45JWl3RefQ==/HP_Hero-FullBleed-Desktop_Gucci-LIDO-TIERI-APR25-46F-10-22-JIM2-8bit-JIM3-EXT_001_Default.png')] 
                bg-cover bg-center bg-no-repeat py-20"
      >
        <Banner />
      </div>

      {/* Heading */}
      <div className="text-6xl md:text-9xl my-10 text-center font-bold">
        <h1>LA MODE LINE</h1>
      </div>
      {/* cards  */}
    
      {/* Cards Section */}
{/* <div className="flex justify-between gap-4 p-4">
  Card 1
  <div className=" shadow-md border p-4 rounded-lg bg-[url('https://images.ctfassets.net/brzb6u29244a/5vzis31KSPoaH1TiDYct9h/4c1a2a4e7b4a734b972fcbb7068802a0/LandscapeXL_Gucci-LIDO-TIERII-MAY25-202503-CD-GUCCI-017-V2_001_Default_1.png?w=2000&fm=avif&q=50')]">
    
    <h6 className="text-lg font-semibold mt-4">Tax Management</h6>
    <p className="text-sm text-gray-600">Life Tips From Top Ten Adventure Travelers</p>
    <a href="#" className="text-blue-500 hover:underline mt-2 block">View Project</a>
  </div>

  Card 2
  <div className=" shadow-md border p-4 rounded-lg">
    <img
      src="https://static.zara.net/assets/public/aa91/963a/534a49e4823f/e55a71d85c96/T9638894376-p/T9638894376-p.jpg?ts=1753777568235&w=750"
      alt="card2"
      className="w-full h-72 object-cover"
    />
    <h6 className="text-lg font-semibold mt-4">Tax Management</h6>
    <p className="text-sm text-gray-600">Life Tips From Top Ten Adventure Travelers</p>
    <a href="#" className="text-blue-500 hover:underline mt-2 block">View Project</a>
  </div>
</div> */}
      <ShowCard/>

      
      <Banner2 />
       <Banner4/>
      <Banner3/>
     
    </div>
  )
}

export default Home
