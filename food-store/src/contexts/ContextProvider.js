import React, { createContext, useContext, useState } from 'react'
import all_menu from '../assets/images/all_menu'

const FoodContext = createContext(undefined);

const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = { all_menu, cartItems, setCartItems, addToCart, removeFromCart }

  return (
    <FoodContext.Provider value={contextValue}>
      {children}
    </FoodContext.Provider>
  )
}

export default ContextProvider

export const useItems = () => useContext(FoodContext);

