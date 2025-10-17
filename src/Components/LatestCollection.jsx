import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/shopContext'; // Make sure this is exported correctly
import Title from './title';
import Productitem from './Productitem';

function LatestCollection() {
  const [latestProduct, setLatestProduct] = useState([]);

  const { products } = useContext(shopContext);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      setLatestProduct(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laboriosam iure at eius explicabo iste deserunt quisquam porro assumenda, quod amet distinctio velit accusantium. Harum voluptatum provident voluptas voluptates nisi?
        </p>
      </div>

      {/* render product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProduct.map((item, index) => (
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  );
}

export default LatestCollection;
