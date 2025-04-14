import React from 'react'
import Navbar from './Navbar'
import './header.scss'
import cart_icon from '../assets/icons/shopping-bag.png'

const Header = () => {
    return (
        <header className='header-wrapper'>
            <div className='header-inner'>
                <div className='header-logo'>
                    <h1>Eatty<span>Filly</span></h1>
                </div>
                <Navbar />
                <div>
                    <img src={cart_icon} alt='cart icon' />
                </div>
                <div>
                    <h4>Login</h4>
                </div>
            </div>
        </header>
    )
}

export default Header
