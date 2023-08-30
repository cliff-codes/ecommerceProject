import React from 'react'
import Showcase from '../src/uiComponents/Showcase'
import FeaturedProductSection from '../src/uiComponents/FeaturedProductSection'
import ProductsCategories from '../src/uiComponents/ProductsCategories'

const Home = () => {
  return (
    <div style={{flexGrow: 1}}>
        <Showcase/>
        <ProductsCategories/>
        <FeaturedProductSection/>
    </div>
  )
}

export default Home