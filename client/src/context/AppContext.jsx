import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { dummyProducts } from '../assets/data';
import toast from 'react-hot-toast';

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [searchQuery,setsearchQuery] = useState("")
    const [cartItems, setCartItems] = useState({})
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charge = 10
    const navigate = useNavigate()
    //Clerk
    const {user} = useUser()
    
    const fetchProducts = () => {
        setProducts(dummyProducts);
    };

    //Add Products to Cart
    const addCart = (itemId, size) => {
        if(!size) return toast.error("Please select a size first")
        let cartData = structuredClone(cartItems)
        if (!cartData[itemId]) cartData[itemId] = {}
        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1
        setCartItems(cartData)
        toast.success("Added to cart!")
    }

    // Get Cart Count
    const getCartCount = () => {
        let count = 0
        for(const itemId in cartItems) {
            for(const size in cartItems[itemId]) {
                if (cartItems[itemId][size] > 0) {
                    count += cartItems[itemId][size]
                }
            }
        }
        return count
    }

    // Update Cart Item Quantity
    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        
        if (quantity === 0) {
            // Check if itemId exists before deleting
            if (cartData[itemId]) {
                delete cartData[itemId][size]
                // If no sizes left for this item, remove the item entirely
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId]
                }
            }
            toast.success("Item removed from cart")
        } else {
            // Ensure itemId exists before setting quantity
            if (!cartData[itemId]) {
                cartData[itemId] = {}
            }
            cartData[itemId][size] = quantity
        }
        
        setCartItems(cartData)
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        user,
        products,
        fetchProducts,
        currency,
        navigate,
        delivery_charge,
        searchQuery,
        setsearchQuery,
        cartItems,
        setCartItems,
        addCart,
        getCartCount,
        updateQuantity,
        
    };

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext)