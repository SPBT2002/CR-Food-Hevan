import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { dummyProducts } from '../assets/data';

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [searchQuery,setsearchQuery] = useState("")
    const [cartItems, setCartItems] = useState([])
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charge = 10
    const navigate = useNavigate()
    //Clerk
    const {user} = useUser()
    
    const fetchProducts = () => {
        setProducts(dummyProducts);
    };

    //Add Products to  Cart
    const addCart = (itemId, size) => {
        if(!size) return toast
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        user,
        products,
        fetchProducts,
        currency,
        delivery_charge,
        searchQuery,
        setsearchQuery,
    };

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext)