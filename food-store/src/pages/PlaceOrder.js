import React, { useState } from 'react'
import './placeOrder.scss'
import { useItems } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom'
import stripe_logo from '../assets/icons/stripe_logo.png'
import { validateEmail } from '../components/utils'

const PlaceOrder = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [cash, setCash] = useState('');
    const [stripe, setStripe] = useState('');

    const { getTotalCartAmount } = useItems();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <main className='place-order-container'>
            <div className='place-order-inner'>
                <h3 className='delivery-title'>Delivery Information</h3>

                <form onSubmit={handleSubmit}>
                    <div className='form-container'>

                        <div className='form-inner'>
                            <div className='doubles-container'>
                                <input type='text' placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <input type='text' placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <br />

                            <div className='email-container'>
                                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <br />

                            <div className='street-container'>
                                <input type='text' placeholder='Street' value={street} onChange={(e) => setStreet(e.target.value)} />
                            </div>
                            <br />

                            <div className='doubles-container'>
                                <input type='text' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                                <input type='text' placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
                            </div>
                            <br />

                            <div className='doubles-container'>
                                <input type='number' placeholder='Zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                                <input type='text' placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                            <br />

                            <div className='phone-container'>
                                <input type='tel' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
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
                                        <input type='radio' id='cash' value={cash} onChange={(e) => setCash(e.target.value)} />
                                        <span>Cash on Delivery</span>
                                    </label>
                                </div>

                                <br />

                                <div className='stripe-payment'>
                                    <label htmlFor='stripe'>
                                        <input type='radio' id='stripe' value={stripe} onChange={(e) => setStripe(e.target.value)} />
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
