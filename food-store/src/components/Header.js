import React from 'react'
import Navbar from './Navbar'
import './header.scss'
import cart_icon from '../assets/icons/shopping-bag.png'

const Header = () => {
    return (
        <>
            <header className='header-wrapper'>
                <div className='header-inner'>
                    <div className='header-logo'>
                        <h1 className='eatty'>Eatty<span className='filly'>Filly</span></h1>
                    </div>
                    <Navbar />
                    <div className='cart-icon-container'>
                        <img src={cart_icon} alt='cart icon' />
                    </div>
                    <div className='login-button-container'>
                        <button>Login</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
