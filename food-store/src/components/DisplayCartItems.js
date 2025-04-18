import React from 'react'
import './displayCartItems.scss'
import { useItems } from '../contexts/ContextProvider'
import minus_icon from '../assets/icons/minus.png'
import plus_icon from '../assets/icons/plus.png'
import trash_icon from '../assets/icons/trash_icon.png'

const DisplayCartItems = () => {
    const { all_menu, cartItems, getTotalCartAmount, getTotalCartItems, removeFromCart, addToCart, deleteFromCart } = useItems();
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

                <div className='cart-total-items-container'>
                    {all_menu.map((item) => {
                        if (cartItems[item.id] > 0) {
                            return <div key={item.id} className='cart-total-items-inner'>
                                <img src={item.image} alt='item pic' className='cart-item-pic' />
                                <h4 className='cart-item-name'>{item.name}</h4>
                                <p className='cart-item-price'>${item.price}</p>

                                <button onClick={() => removeFromCart(item.id)}><img src={minus_icon} alt='minus icon' className='plus-minus-icon' /></button>
                                <button>{cartItems[item.id]}</button>
                                <button onClick={() => addToCart(item.id)}><img src={plus_icon} alt='plus icon' className='plus-minus-icon' /></button>

                                <h4 className='cart-item-total-price'>${item.price * cartItems[item.id]}</h4>
                                <img onClick={() => deleteFromCart(item.id)} src={trash_icon} alt='trash icon' className='trash-icon' />
                            </div>
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default DisplayCartItems
