import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <footer id='footer' className='footer-container'>

      <div className='footer-inner'>
        <div className='logo-container'>
          <Link to='/' onClick={() => window.scrollTo(0, 0)}><h1 className='eatty'>Eatty<span className='filly'>Filly</span></h1></Link>
        </div>

        <div className='contact-container'>
          <h1>Contact Us</h1>
          <p>Phone: +234 708 549 5430</p>
          <p>Email: hello@dimgbaeme.com.ng</p>
        </div>
      </div>

      <p className='rights'>All rights reserved by EattyFilly, 2025.</p>

    </footer>
  )
}

export default Footer
