import React from 'react'
import './about.scss'
import about_image from '../assets/images/about_image.jpg'

const About = () => {
    return (
        <div id='about-us' className='about-container'>
            <h1>About Us</h1>
            <div className='about-inner'>
                <img src={about_image} alt='about image' />
                <p></p>
            </div>
        </div>
    )
}

export default About
