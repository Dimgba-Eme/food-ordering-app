import React from 'react'
import './foodItems.scss'
import icon_add_to_cart from '../assets/icons/icon-add-to-cart.svg'
import icon_decrement_quantity from '../assets/icons/icon-decrement-quantity.svg'
import icon_increment_quantity from '../assets/icons/icon-increment-quantity.svg'
import { useItems } from '../contexts/ContextProvider'


const FoodItems = (props) => {

    const { cartItems, addToCart, removeFromCart } = useItems();

    return (
        <div className='food-items-container'>
            <div className='food-items-inner' key={props.id}>
                <img src={props.image} alt='' />


                {!cartItems[props.id]
                    ? <div className='add-to-cart-container' onClick={() => addToCart(props.id)}>
                        <img src={icon_add_to_cart} alt='add to cart icon' className='add-to-cart-icon' />
                        <p className='add-to-cart-title'>Add to cart</p>
                    </div>
                    : <div className='cart-quantity-container'>
                        <img src={icon_decrement_quantity} alt='icon decrement' className='icon-plus-minus' onClick={() => removeFromCart(props.id)} />
                        <p className='item-count'>{cartItems[props.id]}</p>
                        <img src={icon_increment_quantity} alt='icon decrement' className='icon-plus-minus' onClick={() => addToCart(props.id)} />
                    </div>}

                <h1 className='item-title'>{props.name}</h1>
                <p className='item-price'>${props.price}</p>
            </div>

        </div>
    )
}

export default FoodItems
