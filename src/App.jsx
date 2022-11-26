import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RandomMeal from './components/RandomMeal/RandomMeal'
import Categories from './components/Categories/Categories'
import Homepage from './components/Homepage/Homepage'
const App = () => {
  return (
    <div>
      <Router>
        
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/random' element={<RandomMeal/>}/>
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App