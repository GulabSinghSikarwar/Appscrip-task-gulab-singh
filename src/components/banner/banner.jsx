import React from 'react';
import './banner.css'
const Banner = () => {
  return (
    <div className="bg-white w-full flex justify-center" style={{ resolution: '700x168' }}>
      <div className="text p-8">
        <h1 className="text-5xl font-bold uppercase mb-4 heading">
          Discover Our Products
        </h1>
        <p className="text-gray-600 subtitle pt-6">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </div>
  );
};

export default Banner;
