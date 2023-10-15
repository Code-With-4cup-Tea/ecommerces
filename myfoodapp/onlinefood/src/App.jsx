import React from 'react'
import Header from './componets/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import Error from './componets/Error'
import { AnimatePresence } from "framer-motion"


const App = () => {
  return (
    <> <AnimatePresence>
        <div className='w-full h-auto bg-primary flex flex-col'>
              <Header/>
            <main className='mt-24 p-8 w-full'>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/*' element={<Error/>}/>
              </Routes>
            </main>
        </div>
      </AnimatePresence>
    </>
  )
}

export default App