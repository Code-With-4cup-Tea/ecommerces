import React from 'react'
import ReactStars from 'react-stars'

const Cards = () => {
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2 gap-3 cursor-pointer'>
          <div className='bg-gray-900 p-2 rounded-md hover:-translate-y-2 hover:transition-all duration-500 '>
                <img src="https://wallpapercave.com/wp/wp7021400.jpg" alt="ddlj" className='h-72' />
                <h1>Dilwale Dulhania Le Jayenge</h1>
                <div className='text-bold'>
                <h1 className='flex gap-2 items-center'>Rating: <span><ReactStars size={20} half={true} value={5} edit={false}/></span> </h1>
                <h1>Year:    1995</h1>
                </div>
            </div>
                
</div>
  )
}

export default Cards
