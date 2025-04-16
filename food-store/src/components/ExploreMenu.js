import React from 'react'
import './exploreMenu.scss'
import menu_list from '../assets/images/menu_list'
import bicycle from '../assets/images/bicycle.jpg'

const ExploreMenu = () => {
    return (
        <section className='explore-menu-container'>
            <h1 className='explore-menu-title'>Explore Our Menu</h1>
            <div className='explore-order-container'>
                <h4 className='explore-order'>Order for Delivery!</h4>
                <img src={bicycle} alt='delivery bicycle' className='bicycle' />
            </div>

        </section>
    )
}

export default ExploreMenu
