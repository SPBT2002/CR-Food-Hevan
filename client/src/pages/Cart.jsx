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
              size: size
            })
          }
        }
       }
      setcartData(tempData)
     }
  }, [products, cartItems])

  const increment = (id, size) => {
    const currentQuantity = cartItems[id][size]
    updateQuantity(id, size, currentQuantity + 1)
  }

  const decrement = (id, size) => {
    const currentQuantity = cartItems[id][size]
    updateQuantity(id, size, currentQuantity + 1)
  }

  return (
    <div>Cart</div>
  )
}

export default Cart