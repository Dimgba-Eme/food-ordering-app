import React from 'react'
import './foodItems.scss'

const FoodItems = (props) => {
    return (
        <div className='food-items-container'>
            <div className='food-items-inner' key={props.id}>
                <img src={props.image} alt='' />
                <h1>{props.name}</h1>
                <p>{props.price}</p>
            </div>

        </div>
    )
}

export default FoodItems
