// src/pages/HomePage.js
import React from 'react';
import Card from '../Components/Cards';

const products = [
  {
    name: 'How to Influence People',
    category: 'Website A',
    price: 22,
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Becoming Influencer',
    category: 'Website B',
    price: 30,
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EmporioPrice</h1>
          <input
            type="text"
            placeholder="Paste product link"
            className="bg-gray-700 text-white px-4 py-2 rounded-full"
          />
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>Subscribe to our newsletter for exclusive deals and updates!</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-gray-700 text-white px-4 py-2 rounded-full mt-2"
          />
          <button className="bg-red-500 px-4 py-2 rounded-full ml-2">Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
