import React, { useState } from 'react'
import './navbar.scss'
import menu_icon from '../assets/icons/hamburger_menu.svg'
import cart_icon from '../assets/icons/shopping-bag.png'
import close_icon from '../assets/icons/close_icon.png'
import { useItems } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [linkNav, setLinkNav] = useState("home")
    const { getTotalCartItems } = useItems();
    return (
        <>
            <img src={menu_icon} alt='menu icon' className='menu-icon' onClick={() => setIsOpen(!isOpen)} />
            <div className='nav-wrapper' onClick={() => setIsOpen(!isOpen)}>
                <nav className={isOpen ? 'isOpen' : ''}>
                    <ul className='nav-inner'>
                        <img src={close_icon} alt='close icon' className='close-icon' onClick={() => setIsOpen(!isOpen)} />
                        <Link to='/' onClick={() => setLinkNav("home")} className={linkNav === 'home' ? 'active' : ''}>Home</Link>
                        <a href='#about-us' onClick={() => setLinkNav("about")} className={linkNav === 'about' ? 'active' : ''}>About</a>
                        <a href='#menu' onClick={() => setLinkNav("menu")} className={linkNav === 'menu' ? 'active' : ''}>Menu</a>
                        <a href='#footer' onClick={() => setLinkNav("contact")} className={linkNav === 'contact' ? 'active' : ''}>Contact</a>
                    </ul>
                </nav>
            </div>
            <div className='cart-icon-container'>
                <Link to='/cart'><img src={cart_icon} alt='cart icon' className='cart-icon' /></Link>
                <p className='item-count'>{getTotalCartItems()}</p>
            </div>

        </>
    )
}

export default Navbar
