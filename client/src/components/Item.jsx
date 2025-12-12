import React,{useState} from 'react'
import { assets } from '../assets/data'

const Item = ({product}) => {
  const [size, setSize] = useState(product.sizes[0]);
  const currency = '$';

  return (
    <div className='relativemt-24 group'>
      {/*Photo*/}
      <div className='mx-auto rounded-full absolute left-0 right-0 -top-21 h-[177px] w-[177px]'>
        <img 
          src={product.images[0]} 
          alt="productImg" 
          height={177} 
          width={177}
          className='absolute inst-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 drop-shadow-md' 
        />
        <img 
          src={product.images[1] ? product.images[1] : product.images[0]} 
          alt="productImg" 
          height={177} 
          width={177}
          className='absolute inst-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 drop-shadow-md' 
        />
      </div>
      {/*Info*/}
      <div className='rounded-4xl bg-primarypt-20 overflow-hidden'>
        {/* Title & Description */}
        <div className='p-3'>
          <h4 className='text-lg line-clamp-1 mb-1'>{product.title}</h4>
          <div className='flex items-start justify-between pb-1'>
            <h5 className='mb-1'>{product.category}</h5>
            <div className='flex items-center justify-start gap-x-1 bold-14'>
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
        <div className='flexBetween p-3 pt-0'>
          <div className='flex gap-1'>
            {product.sizes.map((item, i)=> (
              <button 
                key={i}
                onClick={()=> setSize(item)}
                className={`${
                  item === size ? 'btn-light' : 'btn-outline'
                } rounded h-6 w-6 p-2 text-x5 flexCenter`}
              >
                  {item}
              </button>
            ))}
          </div>
          <h4>{currency}{product.price[size]}</h4>
        </div>
        {/* Order Info & Button */}
        <div>
          <div>
            <div>
              <h5>Prep</h5>
              <p className='text-x5'>5min</p>
            </div>
            <hr />
            <div>
              <h5>Cook</h5>
              <p className='text-x5'>20min</p>
            </div>
          </div>
          <div>
            <button>
              <img src={assets.cartAdd} alt="" width={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item