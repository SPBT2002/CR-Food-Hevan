import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { dummyProducts } from '../assets/data';

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charge = 10
    const navigate = useNavigate()
    //Clerk
    const {user} = useUser()
    
    const fetchProducts = () => {
        setProducts(dummyProducts);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        user,
        products,
        fetchProducts,
        currency,
        navigate,
        delivery_charge  // Fixed typo: was "delivery_charges"
    };

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext)