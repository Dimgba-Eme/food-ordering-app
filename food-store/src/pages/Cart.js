import React from 'react'
import DisplayCartItems from '../components/DisplayCartItems'

const Cart = () => {
  return (
    <main className='cart-container'>
      <p>Your Cart</p>
      <DisplayCartItems />
    </main>
  )
}

export default Cart
