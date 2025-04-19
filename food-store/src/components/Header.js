import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <header className='header-wrapper'>
            <div className='header-inner'>
                <div className='header-logo-container'>
                    <Link to='/' className='header-logo'>Eatty<span className='filly'>Filly</span></Link>
                </div>
                <Navbar />

                <button className='login-btn'>Login</button>
            </div>
        </header>
    )
}

export default Header
