import React, { useEffect } from 'react'
import store from './store/store'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Header from './component/Header'
import Home from './component/home/Home'
import { fetchDataApi } from './utils/api'
import Footer from './component/Footer'




const App = () => {

  useEffect(()=>{
      apiTest() 
  },[])

  const apiTest = ()=>{
      fetchDataApi('/movie/popular')
      .then((res)=>{
        console.log(res)
      })
  }
  
  return (
    <><Provider store={store}>
    <AnimatePresence>
    <div className='w-full h-auto bg-bodyColor flex flex-col'>
          <Router>
        
              <Header/>
        {/* <main className='mt-24 p-8 w-full'> */}
           <Routes>
                    <Route path='/*' element={<Home/>}/>
                   
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