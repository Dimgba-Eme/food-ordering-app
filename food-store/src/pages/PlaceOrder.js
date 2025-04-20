import React from 'react'
import './placeOrder.scss'
import { useItems } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom'
import stripe_logo from '../assets/icons/stripe_logo.png'

const PlaceOrder = () => {
    const { getTotalCartAmount } = useItems();
    return (
        <main className='place-order-container'>
            <div className='place-order-inner'>
                <h3 className='delivery-title'>Delivery Information</h3>

                <form>
                    <div className='form-container'>

                        <div className='form-inner'>
                            <div className='doubles-container'>
                                <input type='text' placeholder='First name' />
                                <input type='text' placeholder='Last name' />
                            </div>
                            <br />

                            <div className='email-container'>
                                <input type='email' placeholder='Email' />
                            </div>
                            <br />

                            <div className='street-container'>
                                <input type='text' placeholder='Street' />
                            </div>
                            <br />

                            <div className='doubles-container'>
                                <input type='text' placeholder='City' />
                                <input type='text' placeholder='State' />
                            </div>
                            <br />

                            <div className='doubles-container'>
                                <input type='number' placeholder='Zipcode' />
                                <input type='text' placeholder='Country' />
                            </div>
                            <br />

                            <div className='phone-container'>
                                <input type='tel' placeholder='Phone' />
                            </div>

                        </div>

                        <div className='cart-total-container'>
                            <h3 className='cart-total-title'>Order Summary</h3>
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

                            <div className='payment-method-container'>
                                <h3 className='payment-method-title'>Payment Method</h3>
                                <br />

                                <div className='cash-payment'>
                                    <label htmlFor='cash'>
                                        <input type='radio' id='cash' />
                                        <span>Cash on Delivery</span>
                                    </label>
                                </div>

                                <br />

                                <div className='stripe-payment'>
                                    <label htmlFor='stripe'>
                                        <input type='radio' id='stripe' />
                                        <img src={stripe_logo} alt='stripe logo' />
                                    </label>
                                </div>


                            </div>

                            <div className='order-btn-container'>
                                <Link to='/stripe'><button className='checkout-btn'>Place Order</button></Link>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default PlaceOrder
