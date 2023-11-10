import React from 'react'
import store from './store/store'
import {Provider, useDispatch} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Header from './component/Header'
import Home from './component/home/Home'

import Footer from './component/Footer'
import About from './component/About'





const App = () => {

  
  
  return (
    <><Provider store={store}>
    <AnimatePresence>
    <div className='w-full h-auto bg-bodyColor flex flex-col'>
          <Router>
        
              <Header/>
        {/* <main className='mt-24 p-8 w-full'> */}
           <Routes>
                    <Route path='/*' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                   
            </Routes>
       {/* </main> */}
       <Footer/>
        </Router>
       
    </div>
      </AnimatePresence>
      </Provider>
    </>
  )
}

export default App