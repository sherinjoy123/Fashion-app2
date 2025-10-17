import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/shopContext';
import Title from './title';
import Productitem from './Productitem';

function BestSeller() {
  const { products } = useContext(shopContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    
    if (products && products.length > 0) {
      console.log(products);
      const bestProducts = products.filter(item => item.bestseller);
      console.log("Bestsellers:", bestProducts);
      setBestSeller(bestProducts.slice(0, 5));
    }
  },[products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={`BEST`} text2={`SELLERS`} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestseller.map((item, index) => (
            <Productitem 
              key={index} 
              id={item._id} 
              name={item.name} 
              image={item.image1} 
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
}

export default BestSeller;
