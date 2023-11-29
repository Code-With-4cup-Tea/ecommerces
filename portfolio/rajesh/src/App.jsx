import React from 'react'
import Navebar from './components/Navebar'

import Home from './components/Home'
import Sociallinks from './components/Sociallinks'

const App = () => {
  return (
    <div className='bg-slate-950 h-screen'>
      
                <Navebar/>
                <Home/>
                <Sociallinks/>
            
                 
             
      
    </div>
  )
}

export default App