import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'

const dummyAddress = [
  {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    country: "USA"
  },
  {
    street: "456 Oak Ave",
    city: "Los Angeles",
    state: "CA",
    country: "USA"
  }
]

const CartTotal = () => {
  const {
    navigate,
    currency,
    method,
    setMethod,
    delivery_charge,
    getCartCount,
    user,
    cartItems,
    setCartItems,
    products,
  } = useAppContext();

  const [addresses, setAddresses] = useState(dummyAddress)
  const [showAddress, setShowAddress] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('cod')

  // Calculate cart total
  const getCartAmount = () => {
    let totalAmount = 0
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const product = products.find(p => p._id === itemId)
        if (product) {
          totalAmount += product.price[size] * cartItems[itemId][size]
        }
      }
    }
    return totalAmount
  }

  const cartAmount = getCartAmount()
  const tax = (cartAmount * 0.02).toFixed(2)
  const totalAmount = (cartAmount + delivery_charge + parseFloat(tax)).toFixed(2)

  return (
    <div>
      {/* Header */}
      <h3 className='text-3xl font-bold text-gray-800 mb-1'>
        Order Details <span className='text-solid text-lg'>({getCartCount()}) Items</span>
      </h3>

      {/* Shipping Address Section */}
      <div className='mt-8 mb-6'>
        <h4 className='text-xl font-semibold text-gray-800 mb-3'>Where to ship your order?</h4>
        <div className='flex justify-between items-center'>
          <p className='text-gray-500 text-sm'>
            {selectedAddress
              ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
              : "No address found"}
          </p>
          <button 
            onClick={() => setShowAddress(!showAddress)} 
            className='text-solid font-semibold text-sm hover:underline ml-4'
          >
            Change
          </button>
        </div>
        {showAddress && (
          <div className='mt-3 bg-primary border border-gray-200 rounded-lg p-3 space-y-2 shadow-sm'>
            {addresses.map((address, index) => (
              <p 
                key={index} 
                onClick={() => { 
                  setSelectedAddress(address)
                  setShowAddress(false)
                }}
                className='cursor-pointer hover:bg-white p-2 rounded text-sm transition-colors'
              >
                {address.street}, {address.city}, {address.state}, {address.country}
              </p>
            ))}
            <p 
              onClick={() => {
                navigate("/address-form")
                window.scrollTo(0, 0)
              }}
              className='cursor-pointer text-solid hover:bg-white p-2 rounded text-sm font-semibold transition-colors'
            >
              + Add Address
            </p>
          </div>
        )}
      </div>

      {/* Payment Method Section */}
      <div className='my-6'>
        <h4 className='text-xl font-semibold text-gray-800 mb-3'>Payment Method</h4>
        <div className='flex gap-3'>
          <button
            onClick={() => setPaymentMethod('cod')}
            className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
              paymentMethod === 'cod'
                ? 'bg-solid text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Cash On Delivery
          </button>
          <button
            onClick={() => setPaymentMethod('stripe')}
            className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
              paymentMethod === 'stripe'
                ? 'bg-solid text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Stripe
          </button>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className='mt-8'>
        <div className='flex justify-between items-center py-2.5'>
          <p className='text-gray-800 font-semibold text-base'>Price</p>
          <p className='text-gray-600 font-medium text-base'>${cartAmount.toFixed(2)}</p>
        </div>
        <div className='flex justify-between items-center py-2.5'>
          <p className='text-gray-800 font-semibold text-base'>Shipping Fee</p>
          <p className='text-gray-600 font-medium text-base'>${delivery_charge.toFixed(2)}</p>
        </div>
        <div className='flex justify-between items-center py-2.5'>
          <p className='text-gray-800 font-semibold text-base'>Tax (2%)</p>
          <p className='text-gray-600 font-medium text-base'>${tax}</p>
        </div>
        
        <div className='flex justify-between items-center pt-4 mt-2'>
          <p className='text-gray-900 font-bold text-xl'>Total Amount:</p>
          <p className='text-gray-900 font-bold text-xl'>${totalAmount}</p>
        </div> 
      </div>

      {/* Proceed Button */}
      <button 
        onClick={() => {
          if (getCartCount() === 0) {
            toast.error('Your cart is empty!')
            return
          }
          if (!user) {
            toast.error('Please login to checkout')
            return
          }
          if (!selectedAddress) {
            toast.error('Please select a delivery address')
            return
          }
          toast.success('Processing your order...')
          navigate('/my-orders')
        }}
        className='w-full bg-solid hover:bg-solidTwo text-white font-semibold py-3.5 rounded-lg text-base transition-all mt-8 shadow-md'
      >
        Proceed to Order
      </button>
    </div>
  )
};

export default CartTotal;