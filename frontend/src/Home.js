import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div className='p-4  bg-success text-white font-weight-bold h4 d-flex justify-content-between align-items-center'>Home Page
    <Link className='text-success bg-white text-decoration-none bg-primary p-2 rounded' to='/'>Logout</Link>
    </div>
    </div>
  )
}

export default Home