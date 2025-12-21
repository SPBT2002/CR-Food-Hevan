import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { dummyProducts } from '../assets/data';

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charge = 10
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
        delivery_charge
    };

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext)