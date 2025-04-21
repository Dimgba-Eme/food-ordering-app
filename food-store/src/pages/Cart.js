import React, { useEffect } from 'react'
import './cart.scss'
import DisplayCartItems from '../components/DisplayCartItems'

const Cart = () => {

    useEffect(() => {
        document.title = "Cart | EattyFilly"
    })
    
    return (
        <main className='cart-container'>
            <h1 className='cart-title'>Your Cart</h1>
            <DisplayCartItems />
        </main>
    )
}

export default Cart
