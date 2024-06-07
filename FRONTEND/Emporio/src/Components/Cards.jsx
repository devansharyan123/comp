// src/components/Cards.js
import React from 'react';

const Cards = ({ product }) => {
  return (
    <div className="p-4">
      <div className="bg-black text-white p-4 rounded-lg shadow-lg relative">
        <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-4" />
        {product.isNew && <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">New</span>}
        {product.isSale && <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">Sale</span>}
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold">${product.price}</span>
          <button className="bg-red-500 px-3 py-1 rounded-full">View</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
