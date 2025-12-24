import React, {useEffect, useState} from 'react'
import Title from './Title'
import Item from './Item';
import { useAppContext } from '../context/AppContext';

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([])
    const { products } = useAppContext()  // Fixed: use object destructuring
    
    useEffect(() => {
        const data = products.filter((item)=> item.popular && item.inStock).slice(0, 5)
      setPopularProducts(data);
    }, [products]); 

  return (
    <section className='max-padd-container py-22 xl:py-28 bg-white'>
        <Title title1={"popular"} title2={" Foods"} title1Styles={"pb-10"}/>
        {/* CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {popularProducts.map((product)=> (
          <div key={product._id}>
            <Item product={product} />
         </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts