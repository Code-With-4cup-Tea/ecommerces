import React from 'react'
import store from './store/store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Header from './component/Header'
import Home from './component/Home'



const App = () => {
  
  return (
    <><Provider store={store}>
    <AnimatePresence>
    <div className='w-full h-auto bg-bodyColor flex flex-col'>
          <Router>
        
              <Header/>
        <main className='mt-24 p-8 w-full'>
           <Routes>
                    <Route path='/*' element={<Home/>}/>
            </Routes>
       </main>
        </Router>
       
    </div>
      </AnimatePresence>
      </Provider>
    </>
  )
}

export default App