import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nav from './uiComponents/Nav'
import Footer from './uiComponents/Footer'
import ErrorPage from '../pages/ErrorPage'

function App() {

  return (
    <div className='App'>
        <Nav/>
      <Router>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path='*' element = {<ErrorPage/>}/>
        </Routes>
      </Router>
        <Footer/>
    </div>
  )
}

export default App
