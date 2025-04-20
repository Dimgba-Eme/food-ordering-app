import React from 'react'
import './about.scss'
import about_image from '../assets/images/about_image.jpg'

const About = () => {
    return (
        <div id='about-us' className='about-container'>
            <h1>About Us</h1>
            <div className='about-inner'>
                <img src={about_image} alt='about image' />
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    Our story is one of passion, dedication, and a commitment to delivering an exceptional culinary experience
                    to our cherished customers. At EattyFilly, our journey began with a simple yet profound vision - to create a haven for food enthusiasts,
                    a place where flavors come alive, with the aim of offering a unique blend of delectable cuisine, inviting ambiance, and impeccable service.
                </p>
            </div>
        </div>
    )
}

export default About
