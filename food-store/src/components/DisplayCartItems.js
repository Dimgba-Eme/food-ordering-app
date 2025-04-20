import React from 'react'
import './displayCartItems.scss'
import { useItems } from '../contexts/ContextProvider'
import minus_icon from '../assets/icons/minus.png'
import plus_icon from '../assets/icons/plus.png'
import trash_icon from '../assets/icons/trash_icon.png'
import { Link } from 'react-router-dom'



const DisplayCartItems = () => {
    const { all_menu, cartItems, getTotalCartAmount, removeFromCart, addToCart, deleteFromCart } = useItems();
    return (
        <section className='cart-items-container'>
            <div className='cart-items-inner'>
                <div className='cart-total-items-container'>
                    {all_menu.map((item) => {
                        if (cartItems[item.id] > 0) {
                            return <div key={item.id} className='cart-total-items-inner'>
                                <img src={item.image} alt='item pic' className='cart-item-pic' />
                                <h4 className='cart-item-name'>{item.name}</h4>
                                <p className='cart-item-price'>${item.price}</p>

                                <button className='counter-btn' onClick={() => removeFromCart(item.id)}><img src={minus_icon} alt='minus icon' className='plus-minus-icon' /></button>
                                <button className='counter-btn'>{cartItems[item.id]}</button>
                                <button className='counter-btn' onClick={() => addToCart(item.id)}><img src={plus_icon} alt='plus icon' className='plus-minus-icon' /></button>

                                <h4 className='cart-item-total-price'>${item.price * cartItems[item.id]}</h4>
                                <img onClick={() => deleteFromCart(item.id)} src={trash_icon} alt='trash icon' className='trash-icon' />
                            </div>
                        }
                    })}
                </div>

                <div className='cart-total-container'>
                    <h3 className='cart-total-title'>Summary</h3>
                    <div className='subtotal-container'>
                        <p className='subtotal-title'>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>

                    <div className='shipping-container'>
                        <p className='shipping-title'>Shipping Fee</p>
                        <p>${0}</p>
                    </div>

                    <div className='grand-total-container'>
                        <h3 className='grand-total-title'>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>

                    <div className='checkout-btn-container'>
                        <Link to='/order' onClick={() => window.scrollTo(0, 0)}><button className='checkout-btn'>PROCEED TO CHECKOUT</button></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DisplayCartItems
