
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nav from './uiComponents/Nav'
import Footer from './uiComponents/Footer'
import ErrorPage from '../pages/ErrorPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'

function App() {

  return (
    <div className='App'>
        <Nav/>
      <Router>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/:id' element={<ProductDetailsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
        <Footer/>
    </div>
  )
}

export default App
