import React from 'react';
import Image from 'next/image';
import './products.css'
import './productCard.css';
import heartIcon from '../../../public/heart.png'
export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white  productCard">
      <div className="relative image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={400}
          objectFit="contain"
        />
      </div>
      <div className="px-6 py-4 ">
        <h4 className="font-bold uppercase font-quicksand" style={{ maxHeight: '20px', textOverflow: 'ellipsis', overflow: 'hidden' }}>{product.title}</h4>

        <div className='flex justify-between items-center'>
          <p className="text-gray-700  font-quicksand  card-fade-text-color small-font mt-4">
            Sign in or Create an account to see pricing
          </p>
          {/* <img src={heartIcon} alt="" /> */}
          <Image src={heartIcon} className='heartIcon' alt='Like Icon' ></Image>
        </div>
      </div>
    </div>
  );
}

// export default ProductCard;
