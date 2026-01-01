import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'

const CartTotal = () => {
  const {
    navigate,
    currency,
    delivery_charge,
    getCartCount,
    user,
  } = useAppContext();

  return (
    <div>
      <h3 className='text-xl font-bold mb-4'>
        Order Summary
      </h3>
      <div className='space-y-3'>
        <div className='flex justify-between'>
          <p className='text-gray-600'>Items ({getCartCount()})</p>
          <p className='font-semibold'>Calculate in cart</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-600'>Delivery Fee</p>
          <p className='font-semibold'>${delivery_charge}.00</p>
        </div>
        <hr className='border-gray-300 my-3' />
        <div className='flex justify-between text-lg font-bold'>
          <p>Total</p>
          <p>${delivery_charge}.00+</p>
        </div>
      </div>
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
          navigate('/address-form')
        }}
        className='btn-solid w-full mt-6'
      >
        Proceed to Checkout
      </button>
    </div>
  )
};

export default CartTotal;