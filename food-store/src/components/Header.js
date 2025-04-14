import React from 'react'
import Navbar from './Navbar'
import './header.scss'

const Header = () => {
    return (
        <header className='header-wrapper'>
            <div className='header-inner'>
                <div className='header-logo'>
                   <h1>Eatty<span>Filly</span></h1>
                </div>
                <Navbar />
               
            </div>
        </header>
    )
}

export default Header
