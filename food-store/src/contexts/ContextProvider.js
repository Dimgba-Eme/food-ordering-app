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

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] = 0 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let cartInfo = all_menu.find((i) => i.id === Number(item));
        totalAmount += cartInfo.price * cartItems[item]
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }


  const contextValue = { all_menu, cartItems, setCartItems, addToCart, deleteFromCart, removeFromCart, getTotalCartAmount, getTotalCartItems }

  return (
    <FoodContext.Provider value={contextValue}>
      {children}
    </FoodContext.Provider>
  )
}

export default ContextProvider

export const useItems = () => useContext(FoodContext);

