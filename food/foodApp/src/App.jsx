import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import { Route,Routes } from 'react-router-dom' 
import Addmovie from './components/Addmovie'



const App = () => {
  return (
    <>
    
      <div className='app'>
            <Header/>
          <Routes>
             <Route path='/' element={<Cards/>}/> 
             <Route path='/addmovie' element={<Addmovie/>}/>
          
          </Routes>
            
      </div>
    </>
  )
}

export default App