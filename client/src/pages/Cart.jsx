import React, {useEffect, useState} from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/data'

const Cart = () => {
  const {navigate, products, currency, cartItems, updateQuantity} = useAppContext()
  const [cartData, setcartData] = useState([])

  useEffect(() => {
    if(products.length > 0) {
      const tempData = []
      for(const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if(cartItems[itemId][size] > 0) {
            tempData.push({
              _id: itemId,
              size: size,
              quantity: cartItems[itemId][size]
            })
          }
        }
       }
      setcartData(tempData)
     }
  }, [products, cartItems])

  const increment = (id, size) => {
    const currentQuantity = cartItems[id]?.[size] || 0
    updateQuantity(id, size, currentQuantity + 1)
  }

  const decrement = (id, size) => {
    const currentQuantity = cartItems[id]?.[size] || 0
    if(currentQuantity > 1) {
      updateQuantity(id, size, currentQuantity - 1)
    }
  }

  return (
    <div className='max-padd-container py-16 pt-28 bg-primary'>
      {/* CONTAINER */}
      <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
        {/* Left Side */}
        <div className='flex-1 flex flex-col gap-3 text-[95%]'>
          <Title title1={"Cart "} title2={"Overview"} titleStyles={"pb-5 items-start"} paraStyles={"hidden"} />
        
          <div className='grid grid-cols-[3fr_1fr_0.5fr] gap-4 font-medium bg-white p-4 rounded-xl'>
            <h5 className='text-left'>Product Details</h5>
            <h5 className='text-center'>Subtotal</h5>
            <h5 className='text-center'>Action</h5>
          </div>

          {cartData.length > 0 ? (
            cartData.map((item, i) => {
              const product = products.find((product) => product._id === item._id)
              
              // Add null check for product
              if (!product) return null
              
              // Safe access to quantity with optional chaining
              const quantity = cartItems[item._id]?.[item.size] || 0
              
              // Skip if quantity is 0 (item was deleted)
              if (quantity === 0) return null
              
              return (
                <div key={i} className='grid grid-cols-[3fr_1fr_0.5fr] gap-4 items-center bg-white p-4 rounded-xl'>
                  {/* Product Details */}
                  <div className='flex items-center gap-4'>
                    <div className='bg-primary rounded-xl p-2 shrink-0'>
                      <img src={product.images[0]} alt={product.title} className='w-16 h-16 object-cover rounded-lg'/>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h5 className='font-semibold text-base line-clamp-1 mb-1'>{product.title}</h5>
                      <div className='text-sm text-gray-600 mb-2'>Size: <span className='font-medium'>{item.size}</span></div>
                      <div className='flex items-center ring-1 ring-slate-900/15 rounded-full overflow-hidden bg-primary w-fit'>
                        <button 
                          onClick={() => decrement(item._id, item.size)} 
                          className='p-1.5 bg-solid text-white rounded-full shadow-md m-0.5 cursor-pointer hover:bg-solidTwo transition-all'
                        >
                          <img src={assets.minus} alt="decrease" width={11} className='invert'/>
                        </button>
                        <span className='px-3 font-medium'>{quantity}</span>
                        <button 
                          onClick={() => increment(item._id, item.size)} 
                          className='p-1.5 bg-solid text-white rounded-full shadow-md m-0.5 cursor-pointer hover:bg-solidTwo transition-all'
                        >
                          <img src={assets.plus} alt="increase" width={11} className='invert'/>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtotal */}
                  <div className='text-center font-semibold text-lg'>
                    {currency}{product.price[item.size] * quantity}.00
                  </div>
                  
                  {/* Action */}
                  <div className='flex justify-center'>
                    <button 
                      onClick={()=>updateQuantity(item._id, item.size, 0)} 
                      className='cursor-pointer hover:scale-110 transition-transform'
                      title="Remove item"
                    >
                      <img src={assets.cartRemove} alt="remove" width={22} />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='text-center py-10 bg-white rounded-xl'>
              <p className='text-gray-500 text-lg'>Your cart is empty</p>
              <button onClick={() => navigate('/menu')} className='btn-solid mt-4'>
                Continue Shopping
              </button>
            </div>
          )}
        </div> 
        
        {/* Right Side */}
        <div className='xl:w-80'>
          <CartTotal />
        </div>
      </div>
    </div>
  )
}


export default Cart