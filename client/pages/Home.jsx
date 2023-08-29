import React from 'react'
import Showcase from '../src/uiComponents/Showcase'
import FeaturedProductSection from '../src/uiComponents/FeaturedProductSection'

const Home = () => {
  return (
    <div style={{flexGrow: 1}}>
        <Showcase/>
        <FeaturedProductSection/>
    </div>
  )
}

export default Home