import React from 'react'
import './placeOrder.scss'
import { useItems } from '../contexts/ContextProvider'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useItems();
    return (
        <main className='place-order-container'>
            <div className='place-order-inner'>
                <form>
                    <div className='form-inner'>
                        <div className='doubles-container'>
                            <input type='text' placeholder='First name' />
                            <input type='text' placeholder='Last name' />
                        </div>

                        <div className='email-container'>
                            <input type='email' placeholder='Email' />
                        </div>

                        <div className='street-container'>
                            <input type='text' placeholder='Street' />
                        </div>

                        <div className='doubles-container'>
                            <input type='text' placeholder='City' />
                            <input type='text' placeholder='State' />
                        </div>

                        <div className='doubles-container'>
                            <input type='number' placeholder='Zipcode' />
                            <input type='text' placeholder='Country' />
                        </div>

                        <div className='phone-container'>
                            <input type='tel' placeholder='Phone' />
                        </div>

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
                        <Link to='/order'><button className='checkout-btn'>PROCEED TO CHECKOUT</button></Link>
                    </div>

                </div>
                </form>
            </div>
        </main>
    )
}

export default PlaceOrder
