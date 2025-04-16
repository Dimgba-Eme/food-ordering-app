import React from 'react'
import './specials.scss'
import specials from '../assets/images/specials'

const Specials = () => {
    return (
        <section className='specials-container'>
            <div className='specials-inner'>
                <h1 className='specials-title'>This Week's Specials!</h1>
                <p className='specials-description'>Savor the extraordinary with our culinary masterpieces crafted to perfection.</p>
            </div>

            <div className='specials-items-container'>
              {specials.map((item) => {
                 return <div key={item.id} className='specials-items-inner'>
                     <img src={item.image} alt='food item' />
                     <h4 className='title'>{item.name}</h4>
                     <p className='description'>{item.description}</p>
                     <p className='price'>${item.price}</p>
                 </div>
              })}
            </div>
        </section>
    )
}

export default Specials
