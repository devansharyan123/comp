// src/pages/Product.jsx
import React from 'react';
import Cards from '../Components/Cards';


const products = [
  {
    name: 'How to Influence People',
    category: 'Website A',
    price: 22,
    image: 'https://via.placeholder.com/150',
    isNew: true,
  },
  {
    name: 'Becoming Influencer',
    category: 'Website B',
    price: 25,
    image: 'https://via.placeholder.com/150',
    isNew: true,
  },
  {
    name: 'Don\'t Get Influenced',
    category: 'Website C',
    price: 20,
    image: 'https://via.placeholder.com/150',
    isSale: true,
  },
  {
    name: 'Win an Argument',
    category: 'Website D',
    price: 28,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product Categories',
    category: 'Product Name A',
    price: 27,
    image: 'https://via.placeholder.com/150',
    isNew: false,
    isSale: true,
  },
  {
    name: 'Product Name B',
    category: 'Product Name B',
    price: 18,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product Name C',
    category: 'Product Name C',
    price: 35,
    image: 'https://via.placeholder.com/150',
    isNew: true,
  },
  // Add more products as needed
];

const Product = () => {
  return (
    <div className="w-full h-full min-h-screen bg-black text-white  m-0 p-0">
       
      <header className="bg-[#2f2f2f] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EmporioPrice</h1>
          <input
            type="text"
            placeholder="Paste product link"
            className="bg-[#2f2f2f] text-white px-4 py-2 rounded-full"
          />
          <button className="bg-red-500 px-3 py-1 rounded-full">Compare</button>
        </div>
      </header>
      <div className='w-max h-full my-2 mx-20 '>
        <h1 className='md:text-4xl text-2xl text-left font-bold '>Product</h1>
        </div>
      <div className="container mx-auto p-4">
        <div className="flex">
          <aside className="w-1/4 bg-black p-4 rounded-lg mr-4">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <ul className="mb-4">
              <li className="mb-2"><a href="#" className="text-white">Book Type</a></li>
              <li className="mb-2"><a href="#" className="text-white">Show Only</a></li>
              <li className="mb-2"><a href="#" className="text-white">Language</a></li>
              <li className="mb-2"><a href="#" className="text-white">Product Type</a></li>
            </ul>
            <button className="bg-red-500 px-4 py-2 rounded-full">Clear Filters</button>
          </aside>
          <main className="w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Sit amet, consectetur elit.</h2>
              <select className="bg-black text-white px-4 py-2 rounded-full">
                <option>Sort by Recommended</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product, index) => (
                <Cards key={index} product={product} />
              ))}
            </div>
            <button className="bg-red-500 px-4 py-2 rounded-full mt-4">Load more products</button>
          </main>
        </div>
      </div>
      <footer className="bg-[#2f2f2f] p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>Subscribe to our newsletter for exclusive deals and updates!</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#2f2f2f] text-white px-4 py-2 rounded-full mt-2"
          />
          <button className="bg-red-500 px-4 py-2 rounded-full ml-2">Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default Product;
