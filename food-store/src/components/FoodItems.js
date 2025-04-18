import React, { useState } from 'react'
import './foodItems.scss'
import icon_add_to_cart from '../assets/icons/icon-add-to-cart.svg'
import icon_decrement_quantity from '../assets/icons/icon-decrement-quantity.svg'
import icon_increment_quantity from '../assets/icons/icon-increment-quantity.svg'
import { useItems } from '../contexts/ContextProvider'

const {cartItems, setCartItems, addToCart, removeFromCart} = useItems();

const FoodItems = (props) => {
    const [itemCount, setItemCount] = useState(0)
    return (
        <div className='food-items-container'>
            <div className='food-items-inner' key={props.id}>
                <img src={props.image} alt='' />


                {!itemCount
                    ? <div className='add-to-cart-container' onClick={() => setItemCount(prev => prev + 1)}>
                        <img src={icon_add_to_cart} alt='add to cart icon' className='add-to-cart-icon' />
                        <p className='add-to-cart-title'>Add to cart</p>
                    </div>
                    : <div className='cart-quantity-container'>
                        <img src={icon_decrement_quantity} alt='icon decrement' className='icon-plus-minus' onClick={() => setItemCount(prev => prev - 1)} />
                        <p className='item-count'>{itemCount}</p>
                        <img src={icon_increment_quantity} alt='icon decrement' className='icon-plus-minus' onClick={() => setItemCount(prev => prev + 1)} />
                    </div>}

                <h1 className='item-title'>{props.name}</h1>
                <p className='item-price'>${props.price}</p>
            </div>

        </div>
    )
}

export default FoodItems
