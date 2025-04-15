import React from 'react'
import hero_pic from '../assets/images/hero_pic.jpg'
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
                <img src={hero_pic} alt='hero pic' className='hero-pic' />
            </div>
            <button>View Menu</button>

        </section>
    )
}

export default Hero
