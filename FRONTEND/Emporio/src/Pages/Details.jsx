import React from 'react'


const Details = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-[600px] px-4">
        
         <div className="w-full md:w-[400px] h-[400px] flex justify-center">
          <img 
            src="https://images.template.net/wp-content/uploads/2015/09/15144546/Fantastic-Free-Nike-Logo-For-You.jpg"
            alt="image"
            className="rounded-xl"
          />
          <div>
          

          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 text-left">
          <h4 className=" text-[30px] mb-[12px] font-bold">Product Comparison</h4>
          <p className="text-[12px] text-white  mb-8">View and compare prices of the same product across multiple websites. Get insights on the highest, lowest, and range of prices to make informed buying decisions.</p>
          
          <div className="flex gap-2">
          <button className="bg-red-600 text-center rounded-2xl w-[70px] h-[45px] text-white flex items-center justify-center">
            Compare
          </button>
          <button className="bg-white rounded-2xl text-center w-[70px] h-[45px] text-black flex items-center justify-center">
          Details
         </button>
          <button className="bg-white rounded-2xl w-[70px] h-[45px] text-black flex items-center justify-center">
           Sort
          </button>

          </div>
          <div className='flex items-center gap-4 py-4'>
  <img
    src="https://pbs.twimg.com/profile_images/1212497855241281536/JaDQeuXl_400x400.jpg"
    alt="Image"
    className="w-9 h-9 object-cover rounded-full"
  />
  <p>Product Comparison Tool</p>
  <img
    src="https://cdn.zeebiz.com/sites/default/files/2023/07/03/249343-screenshot-2023-07-03-121502.png?im=FitAndFill=(1200,900)"
    alt="Image"
    className="w-9 h-9 object-cover rounded-full"
  />
  <p>Product Prices Overview</p>
</div>
<div className='flex gap-2'>
<button className="bg-red-600 text-center rounded-2xl w-[200px] h-[45px] text-white flex items-center justify-center">
            View
 </button>
 <button className="bg-white text-center rounded-2xl w-[100px] h-[45px] text-black flex items-center justify-center">
            View all
 </button>
</div>
<div className='flex gap-4 py-6'> 
<input
        type="text"
        placeholder="HIGHEST PRICE"
        className="px-4 py-2 border h-[200px] w-[200px] bg-black border-gray-300 rounded-xl shadow-sm "
      />
         <input
        type="text"
        placeholder="LOWEST PRICE"
        className="px-4 py-2 border h-[200px] w-[200px] bg-black border-gray-300 rounded-xl shadow-sm"
      />
</div>
<div>

</div>
        </div>
      </div>
    </div>
  )
}

export default Details;
