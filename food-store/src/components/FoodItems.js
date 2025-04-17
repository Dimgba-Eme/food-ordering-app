import React, { useState } from 'react'
import './foodItems.scss'
import icon_add_to_cart from '../assets/icons/icon-add-to-cart.svg'

const FoodItems = (props) => {
    const [itemCount, setItemCount] = useState(0)
    return (
        <div className='food-items-container'>
            <div className='food-items-inner' key={props.id}>
                <img src={props.image} alt='' />


                {!itemCount
                    ? <div className='add-to-cart-container'>
                        <img src={icon_add_to_cart} alt='add to cart icon' className='add-to-cart-icon' />
                        <p className='add-to-cart-title'>Add to cart</p>
                    </div>
                    : <div></div>}

                <h1 className='item-title'>{props.name}</h1>
                <p className='item-price'>${props.price}</p>
            </div>

        </div>
    )
}

export default FoodItems
