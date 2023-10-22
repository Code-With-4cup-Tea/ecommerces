import React from 'react'
import Header from './componets/Header'
import { Route, Routes } from 'react-router-dom'
import Maincontainer from './componets/Maincontainer'
import CreateItem from './componets/CreateItem'
import { AnimatePresence } from "framer-motion"

console.log("this is app.jsx")
const App = () => {
  return (
    <> <AnimatePresence >
        <div className='w-full h-auto bg-primary flex flex-col'>
              <Header/>
            <main className='mt-16 md:mt-24 p-8 w-full'>
              <Routes>
                  <Route path='/*' element={<Maincontainer/>}/>
                  <Route path='/createitem' element={<CreateItem/>}/>
              </Routes>
            </main>
        </div>
      </AnimatePresence>
    </>
  )
}

export default App