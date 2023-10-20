import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-700'>
   <Link to={"/"}><p>Filmy<span className='text-white'>Verse</span></p></Link>

   <Link to={"/addmovie"}> <Button variant="outlined"><h1 className='text-lg text-white hover:cursor-pointer hover:text-red-500 transition ease-in'>
    <AddIcon className='m-1'/>Add New</h1></Button>
    </Link>
    </div>
  )
}

export default Header