import React, {useEffect, useState} from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/data'

const Cart = () => {
  const {navigate, products, currency, cartItems} = useAppContext()

  return (
    <div>Cart</div>
  )
}

export default Cart