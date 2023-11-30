import React from 'react'
import Navebar from './components/Navebar'

import Home from './components/Home'
import Sociallinks from './components/Sociallinks'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='h-auto'>
      
                <Navebar/>
                <Home/>
                <Projects/>
                <Skill/>
                <Contact/>
                <Sociallinks/>
            
                 
             
      
    </div>
  )
}

export default App