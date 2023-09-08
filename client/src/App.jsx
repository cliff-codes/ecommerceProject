
import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nav from './uiComponents/Nav'
import Footer from './uiComponents/Footer'
import ErrorPage from '../pages/ErrorPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import CartPage from '../pages/CartPage'
import ShopNowPage from '../pages/ShopNowPage'

function App() {

  return (
    <div className='App'>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' index element={<Home/>} />
          <Route path='/:id' element={<ProductDetailsPage/>} />
          <Route path='/cart' element = {<CartPage/>}/>
          <Route path='/shoppingPage' element = {<ShopNowPage/>}/>
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
