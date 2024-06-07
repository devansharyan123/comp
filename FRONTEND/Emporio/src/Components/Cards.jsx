// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm">{product.category}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-semibold">${product.price}</span>
        <button className="bg-red-500 px-3 py-1 rounded-full">View</button>
      </div>
    </div>
  );
};

export default ProductCard;
