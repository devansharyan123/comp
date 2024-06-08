// src/components/MainContent.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";
//import amazon from "../assets/amazon.jpeg";
const categories = [
  {
    name: "Amazon",
    count: 49,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.dLl9UyA6y1GTydI-npnoygHaHv&pid=Api&P=0&h=180",
  },
  {
    name: "Flipkart",
    count: 7,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.UhZN3vN_TRKSBI0Ek3gN0wHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "Croma",
    count: 13,
    image:
      " https://tse1.mm.bing.net/th?id=OIP.GhaOKgDMZe53nr2HDwFPAAAAAA&pid=Api&P=0&h=180 ",
  },
  {
    name: "Snapdeal",
    count: 63,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Z6t8uSi-Hj-A4D4jbRKeegHaE7&pid=Api&P=0&h=180",
  },
  {
    name: "RelianceDigitals",
    count: 23,
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Ws1BftKfrqJG4-9kqOOymwHaEN&pid=Api&P=0&h=180",
  },
  // { name: "Jeans", count: 11, image: "https://via.placeholder.com/50" },
];

const Price = () => {
  return (
    <div className="flex-1 bg-black text-white h-screen p-6 my-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Price Categories</h2>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          New Category
        </button>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4  ">
              <img
                src={category.image}
                alt={category.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{category.name}</h3>
                <p className="text-gray-400">{category.count} available</p>
              </div>
            </div>
            <FaArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
