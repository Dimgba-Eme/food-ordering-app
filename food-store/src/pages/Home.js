import React, { useState } from 'react'
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import ExploreMenu from '../components/ExploreMenu'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <main>
      <Hero />
      <Specials />
      <ExploreMenu category={category} setCategory={setCategory} />
    </main>
  )
}

export default Home
