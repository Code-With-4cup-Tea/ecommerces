import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Error from './Error'
import Header from './component/Header'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
            {
            //2: naviagarion bar jo hamesha app har page ke top pe rakhna chatey hai to usay
            // Routes ke uppar or Router ke nichay likho
           }
              <Header/>

          <Routes>
         
          {// day1: createing route with elements ##############################
           //***************************************************************** */
           }
              <Route path="/" element={<Home/>}/> 
              <Route path="/about" element={<About/>}/> 
              <Route path="/products" element={<Products/>}/> 
              <Route path="/contact" element={<Contact/>}/> 
              <Route path="/singleproduct/:id" element={<SingleProduct/>}/> 
              <Route path="/cart" element={<Cart/>}/> 
              <Route path="*" element={<Error/>}/> 

            {// day1: complete#########################################################
           //***************************************************************** */



           }                                   


              


          </Routes>
      </Router>
    </>
  )
}

export default App