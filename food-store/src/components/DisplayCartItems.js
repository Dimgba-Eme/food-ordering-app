import React from 'react'
import './displayCartItems.scss'
import { useItems } from '../contexts/ContextProvider'

const DisplayCartItems = () => {
    const {all_menu, cartItems, getTotalCartAmount, getTotalCartItems, removeFromCart} = useItems();
    return (
        <section className='cart-items-container'>
            <div className='cart-items-inner'>
                <div className='cart-items-info'>
                    <p>Product</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                <div className='cart-items-added'>
                    <img />
                    <h4>item title</h4>
                    <p>item price</p>
                    <div className='cart-item-quantity-container'>
                        <p>minus</p>
                        <p>number</p>
                        <p>plus</p>
                    </div>
                    <h4>item total</h4>
                    <img />
                </div>
            </div>
        </section>
    )
}

export default DisplayCartItems
