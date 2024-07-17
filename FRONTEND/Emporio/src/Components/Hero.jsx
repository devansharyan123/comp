import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  const [url, setUrl] = useState('');
  const [budget, setBudget] = useState('');
  const [email, setEmail] = useState('');
  const [productDetails, setProductDetails] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    if (url.trim() === '') {
      alert('Please enter a URL');
      return;
    }

    if (budget.trim() === '') {
      alert('Please enter your budget');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/',
        {
          url: url,
          budget: budget,
          email: email
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      setProductDetails(response.data);
      setMessage(response.data.message);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-[600px] px-4">
        <div className="flex flex-col w-full md:w-1/2 text-left">
          <h4 className="text-[50px] mb-[12px] font-bold">Find the best prices for your desired products online</h4>
          <p className="text-[20px] text-gray-400 mb-8">Check prices from various websites instantly!</p>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center rounded-2xl h-[45px] p-2 w-full md:w-[350px] bg-gray-700">
              <input 
                type="text" 
                placeholder="Paste your product URL here" 
                className="flex-grow p-2 rounded-2xl text-gray-500 bg-gray-700" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <FaSearch className="text-black ml-2" />
            </div>

            <div className="flex items-center rounded-2xl h-[45px] p-2 w-full md:w-[350px] bg-gray-700">
              <input 
                type="number" 
                placeholder="Enter your budget" 
                className="flex-grow p-2 rounded-2xl text-gray-500 bg-gray-700" 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className="flex items-center rounded-2xl h-[45px] p-2 w-full md:w-[350px] bg-gray-700">
              <input 
                type="email" 
                placeholder="Enter your Email" 
                className="flex-grow p-2 rounded-2xl text-gray-500 bg-gray-700" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button 
              className="bg-red-600 rounded-2xl w-[150px] h-[45px] text-white font-bold py-2 px-4"
              onClick={handleSearch}
            >
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

      {productDetails && (
        <div className="mt-8 p-4 bg-gray-800 text-white rounded">
          <h5 className="text-xl font-bold mb-2">Product Details</h5>
          <p>Title: {productDetails.product_title}</p>
          <p>Price: {productDetails.product_price}</p>
          <p>Highest Price: {productDetails.highest_price}</p>
          <p>Lowest Price: {productDetails.lowest_price}</p>
          <p>Current Price: {productDetails.current_price}</p>
          <p>Image Link: {productDetails.product_image}</p>
          <p className="mt-4 font-bold">{message}</p>
        </div>
      )}
    </div>
  );
}

export default Hero;
