import React, { createContext, useEffect } from 'react'
import { dummyProducts } from '../assets/data';

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charge = 10
    const navigate = useNavigate()
    
    const fetchProducts = () => {
        setProducts(dummyProducts);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        products,
        fetchProducts,
        currency,
        navigate,
        delivery_charge,
    };

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

