import React from 'react'
import Navbar from './Navbar'
import './header.scss'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header-inner'>

                <Navbar />
            </div>
        </div>
    )
}

export default Header
