import React,{useState} from 'react'
import { assets } from '../assets/data'

const Item = ({product}) => {
  const [size, setSize] = useState(product.sizes[0]);
  const currency = '$';

  return (
    <div className='relativemt-24 group'>
      {/*Photo*/}
      <div>
        <img 
          src={product.images[0]} 
          alt="productImg" 
          height={177} 
          width={177} 
        />
        <img 
          src={product.images[1] ? product.images[1] : product.images[0]} 
          alt="productImg" 
          height={177} 
          width={177} 
        />
      </div>
      {/*Info*/}
      <div>
        {/* Title & Description */}
        <div>
          <h4>{product.title}</h4>
          <div>
            <h5>${product.category}</h5>
            <div>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <h5>5.0</h5>
            </div>
          </div>
          <p className='line-clamp-1'>{product.description}</p>
        </div>
        {/* Product Sizes */}
        <div>
          <div>
            {product.sizes.map((item, i)=> (
              <button>
                  {item}
              </button>
            ))}
          </div>
          <h4>{currency}{product.price[size]}</h4>
        </div>
      </div>
    </div>
  )
}

export default Item