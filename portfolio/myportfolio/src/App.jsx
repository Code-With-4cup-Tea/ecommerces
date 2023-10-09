import React from 'react'
import Header from './containers/Header'

const App = () => {
  return (
    <>
          <div className='w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32 '>
                      {/*1: header*/}
                <Header/>
          </div>
    </>
  )
}

export default App