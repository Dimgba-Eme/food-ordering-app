import React from 'react'
import './testimonials.scss'
import testimonials_list from '../assets/images/testimonials_list'

const Testimonials = () => {
    return (
        <section className='testimonials-container'>
            <div className='testimonials-inner'>
                <h1>Testimonials</h1>
                <div className='people-testimony-container'>
                    {testimonials_list.map((data, index) => {
                        return <div key={index} className='people-testimony-inner'>
                            <img src={data.image} alt='customer pic' className='customer-pic' />
                            <h4>{data.name}</h4>
                            <img src={data.rating} alt='rating icon' className='rating-icon' />
                            <p>{data.comment}</p>
                        </div>
                    })}
                </div>

            </div>
        </section>
    )
}

export default Testimonials
