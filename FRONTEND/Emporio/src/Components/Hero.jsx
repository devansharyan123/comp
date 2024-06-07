import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-[600px] px-4">
        
        <div className="flex flex-col w-full md:w-1/2 text-left">
          <h4 className=" text-[50px] mb-[12px] font-bold">Find the best prices for your desired products online</h4>
          <p className="text-[20px] text-gray-400 mb-8">Check prices from various websites instantly!</p>
          
          <div className="flex gap-4">
            <div className="flex items-center  rounded-2xl  h-[45px] p-2 w-[350px] bg-gray-700">
              <input 
                type="text" 
                placeholder="Paste your products here" 
                className="flex-grow p-2 rounded-2xl text-gray-500  bg-gray-700 " 
              />
              <FaSearch className="text-black ml-2" />
            </div>
            <button className="bg-red-600 rounded-2xl w-[150px] h-[45px] text-white font-bold py-2 px-4">
              Search
            </button>
          </div>
        </div>
        
   
        <div className="w-full md:w-[300px] h-[300px] flex justify-center">
          <img 
            src="https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg"
            alt="ipad image"
            className="w-auto h-[300px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
