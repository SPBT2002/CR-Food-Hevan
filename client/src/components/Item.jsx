import React,{useState} from 'react'
import { assets } from '../assets/data'

const Item = ({product}) => {
  const [size, setSize] = useState(product.sizes[0]);
  const currency = '$';

  return (
    <div className='relative mt-24 group'>
      {/*Photo*/}
      <div className='mx-auto rounded-full absolute left-0 right-0 -top-20 h-[177px] w-[177px] overflow-hidden'>
        <img 
          src={product.images[0]} 
          alt="productImg" 
          height={177} 
          width={177}
          className='absolute inset-0 h-full w-full rounded-full object-cover opacity-100 group-hover:opacity-0 drop-shadow-md' 
        />
        <img 
          src={product.images[1] ? product.images[1] : product.images[0]} 
          alt="productImg" 
          height={177} 
          width={177}
          className='absolute inset-0 h-full w-full rounded-full object-cover opacity-0 group-hover:opacity-100 drop-shadow-md'
        />
      </div>
      {/*Info*/}
      <div className='rounded-4xl bg-primary pt-20 overflow-hidden'>
        {/* Title & Description */}
        <div className='p-3 pt-8'>
          <h4 className='text-xl font-bold line-clamp-1 mb-1'>{product.title}</h4>
          <div className='flex items-center justify-between pb-1'>
            <h5 className='mb-1'>{product.category}</h5>
            <div className='flex items-center justify-end gap-x-0.5 text-sm'>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <img src={assets.star} alt="" width={16} height={16}/>
              <h5 className='font-bold ml-1'>5.0</h5>
            </div>
          </div>
          <p className='line-clamp-1'>{product.description}</p>
        </div>
        {/* Product Sizes */}
        <div className='flex items-center justify-between p-3 pt-2'>
          <div className='flex gap-1.5'>
            {product.sizes.map((item, i)=> (
              <button 
                key={i}
                onClick={()=> setSize(item)}
                className={`${
                  item === size ? 'btn-light' : 'btn-outline'
                } rounded h-6 w-6 p-2 text-xs flexCenter`}
              >
                  {item}
              </button>
            ))}
          </div>
          <h4 className='text-solidOne text-xl font-bold'>{currency}{product.price[size]}</h4>
        </div>
        {/* Order Info & Button */}
        <div className='flex items-end justify-between px-5 pb-3 pt-2 text-[13px] font-semibold'>
          <div className='flexStart gap-5'>
           <div className='flex flex-col gap-0.5'>
  <h5 className='font-semibold'>Prep</h5>
  <p className='text-xs font-normal'>5m</p>
</div>
<hr className="h-8 w-[1px] bg-tertiary/20 border-none"/>
<div className='flex flex-col gap-0.5'>
  <h5 className='font-semibold'>Cook</h5>
  <p className='text-xs font-normal'>20m</p>
</div>
</div>
          <div className='flex items-end'>
  <button className='bg-solidOne hover:bg-solid transition-all rounded-tr-3xl rounded-bl-3xl p-4 active:scale-95'>
    <img src={assets.cartAdd} alt="" width={24} height={24}/>
  </button>
</div>
        </div>
      </div>
    </div>
  )
}

export default Item