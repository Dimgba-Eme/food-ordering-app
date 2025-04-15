import React from 'react'
import './navbar.scss'
import menu_icon from '../assets/icons/hamburger_menu.svg'

const Navbar = () => {
    return (
        <>
            <nav className='nav-container'>
                <img src={menu_icon} alt='menu icon' className='menu-icon' />
                <ul className='nav-inner'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
