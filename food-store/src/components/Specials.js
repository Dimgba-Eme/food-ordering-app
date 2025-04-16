import React from 'react'
import './specials.scss'
import specials from '../assets/images/specials'

const Specials = () => {
    return (
        <section className='specials-container'>
            <div className='specials-inner'>
                <h1 className='specials-title'>This Week's Specials</h1>
                <p className='specials-description'>Savor the extraordinary with our culinary masterpieces crafted to perfection</p>
            </div>

            <div className='specials-items-container'>
              {specials.map((item, index) => {

              })}
            </div>
        </section>
    )
}

export default Specials
