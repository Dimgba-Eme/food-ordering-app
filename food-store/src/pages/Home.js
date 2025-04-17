import React, { useState } from 'react'
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import ExploreMenu from '../components/ExploreMenu'
import DisplayMenuItem from '../components/DisplayMenuItem'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <main>
      <Hero />
      <Specials />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DisplayMenuItem />
    </main>
  )
}

export default Home
