import React from 'react'
import Banner from '../components/Header/Home/Banner'
import Banner2 from '../components/Header/Home/Banner2'
import Banner3 from '../components/Header/Home/Banner3'
import Banner4 from '../components/Header/Home/Banner4'
import ShowCard from '../components/Header/Home/ShowCard'

const Home = () => {
  return (
    <div className="">
      <div
        className="bg-[url('https://media.gucci.com/dynamic/b3c8/0G+FNv+VrJjErdr_Ylw0OjTz7BcwrOrG8EZnbtBD04J_a4Lq_8kZcyGyUozb_VkpewLCg2aaGB8Jl8_2jghLMYXQfJuOpXjykjPApRr_Ji+YFeXIoIH3gFdwYAR4ibRPcPH7Jig922LahOvW1qADoLn+AfoFH2_buMmPJc4PL79a+n9Axihl0dmM8pLhiUhrDOKopOinfk_6TcdCOUQh1r47CmzamAoZTmlseCMPd9SeKM8fWablY9NivVlUYN4XYKA4z8MrpItmpKeq5JwYG1tFu07uclUSWPqmn0P62wXO3r0uZYq+X7txEwHnATK49WTdWUWAEUyIsDyBRfrdkLXk0B7N_aUxYQYHmn1snZPz3cXNPRZX1AL3jY1sgKUjVYISizpVrINU45JWl3RefQ==/HP_Hero-FullBleed-Desktop_Gucci-LIDO-TIERI-APR25-46F-10-22-JIM2-8bit-JIM3-EXT_001_Default.png')] 
                bg-cover bg-center bg-no-repeat py-20"
      >
        <Banner />
      </div>
      <div className="text-6xl md:text-9xl my-10 text-center font-bold">
        <h1>LA MODE LINE</h1>
      </div>
      <ShowCard />
      <Banner2 />
      <Banner4 />
      <Banner3 />

    </div>
  )
}

export default Home
