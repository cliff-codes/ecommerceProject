import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nav from './uiComponents/Nav'

function App() {

  return (
    <>
          <Nav/>
      <Router>
        <Routes>
          <Route index element = {<Home/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
