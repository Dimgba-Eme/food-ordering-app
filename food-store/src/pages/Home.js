import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import ExploreMenu from '../components/ExploreMenu'
import DisplayMenuItem from '../components/DisplayMenuItem'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

const Home = () => {

  const [category, setCategory] = useState("All");

  useEffect(() => {
    document.title = "Home | EattyFilly"
  })
  
  return (
    <main>
      <Hero />
      <Specials />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DisplayMenuItem category={category} />
      <Testimonials />
      <About />
    </main>
  )
}

export default Home
