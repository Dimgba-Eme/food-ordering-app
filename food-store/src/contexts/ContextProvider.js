import React, { createContext, useContext } from 'react'
import all_menu from '../assets/images/all_menu'

const FoodContext = createContext(undefined);

const ContextProvider = ({ children }) => {

  const contextValue = { all_menu }

  return (
    <FoodContext.Provider value={contextValue}>
      {children}
    </FoodContext.Provider>
  )
}

export default ContextProvider

export const useItems = () => useContext(FoodContext);

