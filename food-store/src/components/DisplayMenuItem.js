import React from 'react'
import { useItems } from '../contexts/ContextProvider'
import FoodItems from './FoodItems';

const DisplayMenuItem = () => {
    const { all_menu } = useItems();
    return (
        <section className='display-menu-container'>
            <div className='display-menu-inner'>
                <h1>Available for order</h1>
            </div>

            <div className='food-item-container'>
                {all_menu.map((item, index) => {
                    return <FoodItems key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                })}
            </div>
        </section>
    )
}

export default DisplayMenuItem
