import React from 'react'
import './hero.scss'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-inner'>
                <div className='hero-intro-container'>
                    <h1>Order your favourite delicacies</h1>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted
                        with the finest ingredients and culinary expertise. Our mission is to
                        satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                    </p>
                </div>
                <button className='hero-btn'>View Menu</button>
            </div>

        </section>
    )
}

export default Hero
